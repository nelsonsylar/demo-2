setTimeout(() => { //设置延迟
    findCloset()
}, 1000);

window.onscroll = function (e) {
    findCloset()
    if (window.scrollY > 0) {
        topNavBar.classList.add("web-scroll")
    }
    else {
        topNavBar.classList.remove("web-scroll")
    }
}

var liTags = document.getElementsByClassName('menuTrigger') //先通过class找爹
for (let key in liTags) { //遍历爹的儿子
    liTags[key].onmouseenter = function (e) {
        let li = e.currentTarget  //返回的e是当前事件元素的行为，e.currentTarget是标签
        li.classList.add('active')
        //brother=li.nextSibling   //找下一个相邻标签,只能找兄弟不能找儿子
        //while(brother.tagName!='UL'){   //如果找到的不是ul标签就再找,直到找到为止
        //    brother=brother.nextSibling
        //}
        //let brother=li.getElementsByTagName('ul')[0]
        //brother.classList.add('active')
    }
    liTags[key].onmouseleave = function (e) {
        let li = e.currentTarget
        li.classList.remove('active')
        //let brother=li.getElementsByTagName('ul')[0] //通过getElementsByTagName找到第一个ul
        //brother.classList.remove('active')
    }
}

function findCloset(){//找最近section
    var specialTags = document.querySelectorAll('[data-x]')           //注意格式 ,属性用[]包围
    let minIndex=0
    for(let i in specialTags){
        if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){ //比较差值小的          
        minIndex=i//并交换
        }    
    }   
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+id+'"]')//通过href内的属性找a标签，"href=#siteAbout"注意格式
    let li = a.parentNode   //找到a的爹，li
    let ul =li.parentNode   //找到li的爹，ul是一个hash
    let brothersAndMe=ul.children    //通过爹来找兄弟和自己
    for(let i=0; i<brothersAndMe.length; i++){  //遍历
        brothersAndMe[i].classList.remove('highlight') //1这种用法是先消除所有的
      }
      li.classList.add('highlight')//2再加上选定的
}
//使用tween非线性速度跳转到锚点
var aTags = document.querySelectorAll('div.top-nav-bar-inner>nav>ul>li>a')//通过关系结构找一堆标签
function animate(time) {  //这个函数是tween要用的
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
for (let i in aTags) {//遍历找到的一堆标签(也就是hash表)
    aTags[i].onclick = function (e) { //这是套路
        e.preventDefault()//去掉点击a的默认方式
        let a = e.currentTarget //找到事件的标签
        let href = a.getAttribute('href') //获取a的href属性，注意a.href会得到带协议的href
        let element = document.querySelector(href)//通过某属性的内容找到元素
        let top = element.offsetTop //offsetTop是该元素距离窗口顶部的距离
        //window.scrollTo(0, top - 60) //转到位置,这里不用,用后面的非线性滚动
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop }; // 起始位置
        var t = Math.abs((s / 100) * 300) // 时间
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords) // 起始位置
            .to({ y: targetTop }, t) // 结束位置 和 时间
            .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
            .onUpdate(function () {
                // coords.y 已经变了
                window.scrollTo(0, coords.y) // 如何更新界面
            })
            .start(); // 开始缓动
    }
}

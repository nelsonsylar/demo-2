window.onscroll = function (e) {
    if (window.scrollY > 0) {
        topNavBar.classList.add("web-scroll")
    }
    else {
        topNavBar.classList.remove("web-scroll")
    }
}
var liTags = document.getElementsByClassName('menuTrigger') //先通过class找爹

for (key in liTags) { //遍历爹的儿子
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


//找最近section
// var specialTags=document.querySelectorAll('[data-x]')           //注意格式 ,属性用[]包围
// console.log(specialTags)
// var minIndex=0
// var currentTop=window.scrollY
// var targetTopy=specialTags[minIndex].offsetTop
// console.log(targetTopy)                //在浏览器打出0
// console.log(specialTags[0].offsetTop) //在浏览器打出0
// console.log(specialTags[1].offsetTop) //在浏览器打出0
// console.log(specialTags[2].offsetTop) //在浏览器打出0


// for(var key in specialTags){



//使用tween非线性速度跳转到锚点
var aTags = document.querySelectorAll('div.top-nav-bar-inner>nav>ul>li>a')//通过关系结构找一堆标签
function animate(time) {  //这个函数是tween要用的
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (var i in aTags) {//遍历找到的一堆标签(也就是hash表)
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

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
var aTags = document.querySelectorAll('div.top-nav-bar-inner>nav>ul>li>a')//通过关系结构找一堆标签
for (var i in aTags) {//遍历找到的一堆标签(也就是hash表)
    aTags[i].onclick = function (e) { //这是套路
        e.preventDefault()//去掉点击a的默认方式
        let a = e.currentTarget //找到事件的标签
        let href = a.getAttribute('href') //获取a的href属性，注意a.href会得到带协议的href
        let element = document.querySelector(href)//通过某属性的内容找到元素
        let top = element.offsetTop //offsetTop是该元素距离窗口顶部的距离
        window.scrollTo(0, top - 60) //转到位置
    }
}
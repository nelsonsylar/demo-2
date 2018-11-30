//使用tween非线性速度跳转到锚点
!function(){
    var view=document.querySelector('div.top-nav-bar-inner')
    var controller={
        view:null,
        aTags:null,
        init:function(){
            this.view=view
            this.aTags=this.view.querySelectorAll('div.top-nav-bar-inner>nav>ul>li>a')
            this.initFrame()
            this.bindEvents()
        },
        bindEvents:function(){
            let aTags=this.aTags
            for (let i in aTags) {//遍历找到的一堆标签(也就是hash表)
                aTags[i].onclick = function (e) { //这是套路
                    e.preventDefault()//去掉点击a的默认方式
                    let a = e.currentTarget //找到事件的标签
                    let href = a.getAttribute('href') //获取a的href属性，注意a.href会得到带协议的href
                    this.tweenMove(href)
                }.bind(this)
            }     
        },
        tweenMove:function(href){    
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
        },
        initFrame:function(){requestAnimationFrame(animate)
            //这个函数是tween要用的
            function animate(time) {  
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
        }
    }
    controller.init(view)
}.call()
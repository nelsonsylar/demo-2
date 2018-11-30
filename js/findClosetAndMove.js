!function(){
    var view=document.querySelectorAll('[data-x]')//注意格式 ,属性用[]包围
    var controller={
        view:null,
        init:function(){
            this.view=view
            this.initLoadAnimation()
        },
        findCloset:function(){
            
            var specialTags = this.view    
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
            console.log('here')
        },
        initLoadAnimation:function(){
            setTimeout(() => { //设置延迟
                
                this.findCloset()
            }, 200);
            window.addEventListener('scroll',()=> {
                this.findCloset()
            })
        }
    }
    controller.init(view)
    
}.call()



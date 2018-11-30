!function(){
   var view=document.querySelector('#myswiperWrapper')
   var controller={
      view:null,
      init:function(){
         this.view=view
         this.bindEvents()
      },
      bindEvents:function(){
         let myswiperWrapper=this.view.children
         for(let i=0;i<myswiperWrapper.length;i++){
            myswiperWrapper[i].onclick=function(e){
                let node=e.currentTarget
                let web=node.getAttribute('clickGoto')
                if(web==1){
                   window.open(`https://nelsonsylar.github.io/manyDemo/painter/painter.html`)
                }else if(web==2){
                   window.open(`https://nelsonsylar.github.io/manyDemo/myHomeNav/keyBoardNav.html`)
                }else if(web==3){
                   window.open(`https://nelsonsylar.github.io/manyDemo/myslide/AppleSlideInfinity.html`)
                }  
            }
        }
      }
   }
   controller.init(view)
             

}.call()

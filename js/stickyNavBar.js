!function(){
    var view=document.querySelector('#topNavBar')
    var controller={
        view:null,
        init:function(view){
           this.view=view
           this.bindEvents()

        },
        bindEvents:function(){
            window.addEventListener('scroll',  function () {
                if (window.scrollY > 0) {
                    this.active()
                }
                else {
                    this.deactive()
                }
            }.bind(this))
        },
        active:function(){
            this.view.classList.add("web-scroll")
        },
        deactive:function(){
            this.view.classList.remove("web-scroll")
        },
        
    }
    controller.init(view)
   
}.call()

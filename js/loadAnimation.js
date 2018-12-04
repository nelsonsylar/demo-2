!function(){
    var view = View('#siteWelcome')
    var controller={
        view:null,
        init:function(view){
            this.view=view
            this.timerClock()
        },
        timerClock:function(){
            setTimeout(()=>{
                this.view.classList.remove('active')
                this.view.nextElementSibling.classList.add('active')
            }, 00)//注意setTimeout传入的函数表达式要加引号
        },
    }
    controller.init(view)
}.call()
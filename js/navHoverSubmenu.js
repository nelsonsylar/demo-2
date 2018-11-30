//----------------nav hover submenu------------------------
!function(){
    var view=document.getElementsByClassName('menuTrigger')
    var controller={
        view:null,
        liTags:null,
        init : function(view){
            this.view=view
            this.bindEvent()
        },  
        bindEvent:function(){
            var liTags = this.view //先通过class找爹
            for (let key in liTags) { //遍历爹的儿子
                liTags[key].onmouseenter = function (event) {
                    this.active(event)
                }.bind(this)
                liTags[key].onmouseleave = function (event) {
                    this.deactive(event)
                }.bind(this)
            }
        },
        active:function(event){
            let li = event.currentTarget  //返回的e是当前事件元素的行为，e.currentTarget是标签
            li.classList.add('active')  //this.active()
        },
        deactive:function(event){
            let li = event.currentTarget
            li.classList.remove('active')  
        }
    }
    controller.init(view)
}.call()


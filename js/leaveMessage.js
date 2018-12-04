!function(){
    var model=Model({'resourceName':'Message'})
    var view=View('.leaveMessage')
    var controller = Controller({
        myForm:null,
        init:function(view,model){
            this.myForm =view.querySelector('#postMessageForm')
            this.loadMessage()
        },
        bindEvents:function(){
            this.myForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        loadMessage:function(){
            this.model.fetch().then(function (message) {
                let array=message.map((item)=>{return item.attributes})//对比一下两者(item)=> item.attributes
                array.forEach((item)=>{ //forEach forEach 注意大写
                    let li=document.createElement('li')
                    li.innerText=`${item.user}:${item.words}`
                    let list=document.querySelector('.messageList')
                    list.prepend(li)
                })
            })
        },
        saveMessage:function(){
            let myName=this.myForm.querySelector('input[name=name]').value
            let myContent=this.myForm.querySelector('input[name=message]').value
            if(myContent!==''){
                this.model.save({'user': myName,'words': myContent},)
                .then(function(object) {
                        let li=document.createElement('li')
                        li.innerText=`${object.attributes.user}:${object.attributes.words}`
                        let list=document.querySelector('.messageList')
                        list.prepend(li)
                        document.querySelector('input[name=message]').value=''
                }, function(object){
                    alert('发送失败!')
                })
            }else{alert('请输入内容')} 
        }
    })
    controller.init(view,model)  
}.call()

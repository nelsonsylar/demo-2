!function(){
    var view=document.querySelector('.leaveMessage')
    var model={
        init:function(){
            var APP_ID = 'utXeW2FLi1Yc9VYKhF7JrVPA-gzGzoHsz';
            var APP_KEY = 'pifg6vQKGATCDDu8p8DQfMHT';
        
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()   //这里返回promise对象，调用后可直接用.then
        },
        save:function(user,words){
            var MyMessage = AV.Object.extend('Message');
            var myMessage = new MyMessage();
            return myMessage.save({   //这里返回promise对象，调用后可直接用.then
                'user': user,
                'words': words
              })   
        }
    }
    var controller={
        view:null,
        model:null,
        myForm:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.myForm =view.querySelector('#postMessageForm')
            this.model.init()
            this.loadMessage()
            this.bindEvents() 
        },
        bindEvents:function(){
            this.myForm.addEventListener('submit',function(e){
                e.preventDefault()
                this.saveMessage()
            }.bind(this))
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
                this.model.save(myName,myContent)
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
    }
    controller.init(view, model) 
    
}.call()

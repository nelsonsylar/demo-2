!function(){
   

    var APP_ID = 'utXeW2FLi1Yc9VYKhF7JrVPA-gzGzoHsz';
    var APP_KEY = 'pifg6vQKGATCDDu8p8DQfMHT';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    var MyMessage = AV.Object.extend('Message');
    var myMessage = new MyMessage();
    var myForm = document.querySelector('#postMessageForm')
    myForm.addEventListener('submit',function(e){
        e.preventDefault()
        let myName=myForm.querySelector('input[name=name]').value
        let myContent=myForm.querySelector('input[name=message]').value
        if(myName!==''&& myContent!==''){
            myMessage.save({
                words: myContent,
                user:myName
                }).then(function(object) {
                    console.log(object)
                    let li=document.createElement('li')
                    li.innerText=`${object.attributes.user}:${object.attributes.words}`
                    let list=document.querySelector('.messageList')
                    list.appendChild(li)
                    myForm.querySelector('input[name=message]').value=''
            } , function(object){
                alert('发送失败!')
            })
        }else{alert('请输入内容或姓名')}

    })
    var query = new AV.Query('Message');
    query.find().then(function (message) {
        let array=message.map((item)=>{return item.attributes})//对比一下两者(item)=> item.attributes
        array.forEach((item)=>{ //forEach forEach 注意大写
            let li=document.createElement('li')
            li.innerText=`${item.user}:${item.words}`
            let list=document.querySelector('.messageList')
            list.appendChild(li)
        })
    }).then(function(message) {
       
    }, function (error) {
      // 异常处理
      console.log(error)
    });
   
}.call()

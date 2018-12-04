/*
 var model = Model({'resourceName':表名})
 ----------------------------------------
 调用时 model.save({'user': user,'words': words})
 */
window.Model = function(options){
    let resourceName=options.resourceName
    return {
        init:function(){
            var APP_ID = 'utXeW2FLi1Yc9VYKhF7JrVPA-gzGzoHsz';
            var APP_KEY = 'pifg6vQKGATCDDu8p8DQfMHT';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            return query.find()   //这里返回promise对象，调用后可直接用.then
        },
        save:function(object){
            var MyMessage = AV.Object.extend(resourceName);
            var myMessage = new MyMessage();
            return myMessage.save(object)   
        }
    }
}
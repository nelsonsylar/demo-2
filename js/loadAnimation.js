
    function loadAnimation() {
        siteWelcome.classList.remove('active')
        siteContent.classList.add('active')
    }
    setTimeout("loadAnimation()", 1000)//注意setTimeout传入的函数表达式要加引号


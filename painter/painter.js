    var canvas = document.getElementById("CanvasPainter")
    var isPainting=false
    var ctx = canvas.getContext("2d");
    var pagewidth=document.documentElement.clientWidth
    var pageheight=document.documentElement.clientHeight
    var lastxy={
        x:undefined,
        y:undefined
    }
   
    

    var isClear=false
    initialWindow()
    
   
    var pencil=document.getElementById('pencil')
    pencil.onclick=function(){
        
        isClear=false
        pencil.classList.add('active1')
        eraser.classList.remove('active1')
    }
    
    var eraser=document.getElementById('eraser')
    eraser.onclick=function(){
        
        isClear=true
        eraser.classList.add('active1')
        pencil.classList.remove('active1')
       
    }
    delete1.onclick=function(){
       
        ctx.clearRect(0,0,pagewidth,pageheight)
        
    }

    download.onclick=function(){
        
        var a = document.createElement('a')
        document.body.appendChild(a)
        
       
        a.href=canvas.toDataURL();
        
        a.download='my painting.jpg'
        a.click()
    }
function initialWindow(){ 
    canvas.width=pagewidth
    canvas.height=pageheight

    window.onresize=function(){
    var pagewidth=document.documentElement.clientWidth
    var pageheight=document.documentElement.clientHeight
    canvas.width=pagewidth
    canvas.height=pageheight 
    }   
}




function draw(x,y) {  
  if (canvas.getContext) {
    ctx.beginPath()
    ctx.arc(x, y, 5, 0, 2*Math.PI );
    ctx.fill();
  }
}

canvas.onmousedown=function(mouse){
    //console.log(mouse)
    isPainting=true
    if(!isClear){
        var X=mouse.clientX
        var Y=mouse.clientY
        draw(X,Y)
        lastxy.x=X
        lastxy.y=Y
    }
    
    
}
canvas.onmousemove=function(mousemove){
    //console.log(mousemove)
    var X=mousemove.clientX
    var Y=mousemove.clientY

    if(isPainting){
        if(isClear){
            cleardraw(X,Y)
        }else{
            draw(X,Y)   //加这一行是为了不让绘制的线段看起来有拼接痕迹
            drawline(lastxy.x,lastxy.y,X,Y);
            lastxy.x=X
            lastxy.y=Y
        }
       
    }

    
}
canvas.onmouseup=function(){
    isPainting=false

}
function drawline(x,y,X,Y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth=10
    ctx.lineTo(X, Y);

    ctx.stroke();
    ctx.closePath();
}
function cleardraw(x1,y1){
    
    ctx.clearRect(x1, y1, 10, 10);
    
}
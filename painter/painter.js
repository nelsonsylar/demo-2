    var canvas = document.getElementById("CanvasPainter")
    var isPainting=false
    var ctx = canvas.getContext("2d");
    var pagewidth=document.documentElement.clientWidth
    var pageheight=document.documentElement.clientHeight
    var lastxy={
        x:undefined,
        y:undefined
    }
    canvas.addEventListener('touchmove',function(event){
        event.preventDefault();//阻止浏览器的默认事件
    })
    var isClear=false
    var mycolor='black'
    var mybursh=10

    initialWindow()
    thin.onclick=function(){
        mybursh=10
        thin.classList.add('active3')
        thick.classList.remove('active3')
    }
    thick.onclick=function(){
        mybursh=20
        thick.classList.add('active3')
        thin.classList.remove('active3')
    }
    if(canvas.ontouchstart==undefined){
        canvas.onmousedown=function(mouse){
            //console.log(mouse)
            isPainting=true
            if(!isClear){
                var X=mouse.clientX
                var Y=mouse.clientY
                draw(X,Y,mybursh)
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
                    draw(X,Y,mybursh)   //加这一行是为了不让绘制的线段看起来有拼接痕迹
                    drawline(lastxy.x,lastxy.y,X,Y,mybursh);
                    lastxy.x=X
                    lastxy.y=Y
                }
               
            }
        
            
        }
        canvas.onmouseup=function(){
            isPainting=false
        
        }
       
    }
  
        canvas.ontouchstart=function(xxx){
            isPainting=true
            if(!isClear){
            var X=xxx.targetTouches['0'].clientX
            var Y=xxx.targetTouches['0'].clientY
            draw(X,Y,mybursh)
            lastxy.x=X
            lastxy.y=Y
            }
        }
        canvas.ontouchmove=function(xxx){
            var X=xxx.targetTouches['0'].clientX
            var Y=xxx.targetTouches['0'].clientY
    
        if(isPainting){
            if(isClear){
                cleardraw(X,Y)
            }else{
                draw(X,Y,mybursh)   //加这一行是为了不让绘制的线段看起来有拼接痕迹
                drawline(lastxy.x,lastxy.y,X,Y,mybursh);
                lastxy.x=X
                lastxy.y=Y
            }
           
        }
        }
        canvas.ontouchend=function(xxx){
            isPainting=false
        }
    
   

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

    black.onclick=function(){
        black.classList.add('active2')
        blue.classList.remove('active2')
        red.classList.remove('active2')
        yellow.classList.remove('active2')
        mycolor='black'
    }
    red.onclick=function(){
        red.classList.add('active2')
        blue.classList.remove('active2')
        black.classList.remove('active2')
        yellow.classList.remove('active2')
        mycolor='red'
    }
    blue.onclick=function(){
        blue.classList.add('active2')
        black.classList.remove('active2')
        red.classList.remove('active2')
        yellow.classList.remove('active2')
        mycolor='blue'
    }
    yellow.onclick=function(){
        yellow.classList.add('active2')
        blue.classList.remove('active2')
        red.classList.remove('active2')
        black.classList.remove('active2')
        mycolor='yellow'
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




function draw(x,y,z) {  
    choseColor(mycolor)
    if (canvas.getContext) {
    ctx.beginPath()
    ctx.arc(x, y, z/2, 0, 2*Math.PI );
    ctx.fill();
  }
}


function drawline(x,y,X,Y,z) {
    choseColor(mycolor)
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth=z
    ctx.lineTo(X, Y);

    ctx.stroke();
    ctx.closePath();

}
function cleardraw(x1,y1){
    
    ctx.clearRect(x1, y1, 10, 10);
    
}
function choseColor(color){
    ctx.strokeStyle = color
    ctx.fillStyle = color
}

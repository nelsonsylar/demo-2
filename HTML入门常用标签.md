# html入门级常用标签

## html的格式规范
```
<!DOCTYPE html>					//当前绝大多数浏览器支持HTML5所以兼容html4.01 xhtml等老版本，不写也能打开但是可能会有隐藏bug
<html lang="en">        		//html开始
<head>	               			 //head开始，里面可以有 meta, link, title, style, script, noscript, base 元素
    <meta charset="UTF-8">  	//meta用于声明字体编码格式等
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>		//title用于显示网页打开时的名字
</head>							//head结束
<body>							//body开始，网页内容放这里面
        <a href="#">link</a> 	//anchor用于超链接网页或本网页的自身跳转
    
</body>							//body结束
</html>							//html结束
```
## html中常用的标签
html中常用标签有a、form、input、button、h1、p、ul、ol、small、strong、div、span、kbd、video、audio、svg。
对于非空元素（标签）可以这样用公式：

    <标签 （属性1='' 属性2='' 属性3=''  确定的属性4 ...）>内容</标签>
    //其中“（）”内可以无，

1. a标签 跳转页面 
<a >


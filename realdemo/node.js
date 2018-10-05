var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的

var string_index="<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>"  // \n换行符
var string_style="h1{color: red;}"
var string_main="var string = \"Hello World\"\n alert(string)"   //""需要用 \"来转义
fs.exists("dirName", function(exists){
	if(exists)
	console.log("error")
	
	if(!exists)
	create_folder()
	
})

function create_folder(){
 fs.mkdirSync("./" + dirName) // mkdir $1
 process.chdir("./" + dirName) // cd $1
 fs.mkdirSync('css') // mkdir css
 fs.mkdirSync('js') // mkdir js

 fs.writeFileSync("./index.html", string_index)
 fs.writeFileSync("css/style.css", string_style)
 fs.writeFileSync("./js/main.js", string_main)
 console.log("success") 
}

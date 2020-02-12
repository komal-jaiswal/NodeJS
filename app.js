var moduleDemo = require('./moduleDemo');
var fs=require('fs');

console.log("hellose");
var time=0;

var a= setInterval(()=>{
   time+=1;
  console.log("after 1 sec");
  if(time == 3){
    clearInterval(a);
  }
},1000);

console.log(__dirname);
console.log(__filename);

function sayHi() {
  console.log("hello");
}

var sayBye=function () {
  console.log("bye");
}
function callFunction(fun) {
fun();
}
callFunction(sayBye);

console.log(moduleDemo.a(['komal','anu','golu']));
console.log(moduleDemo.adder(5,89));
console.log(moduleDemo.pi);

var filedata=fs.readFileSync('./info.txt','utf8');
console.log(filedata);
fs.writeFileSync('writeMe.txt',filedata);

//asynchronous reading of file data
fs.readFile('./info.txt','utf8',function (err,data) {
  console.log(data);
});

console.log("this will first because of async file reading");

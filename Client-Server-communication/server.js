var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/datasendtoserver.txt');
var mywriteStream=fs.createWriteStream(__dirname+'/writetext.txt');
myReadStream.on('data',function (chunk) {
  console.log("new chunk received");
  console.log(chunk);
  mywriteStream.write(chunk);
});
//instead of above 4 lines you can use single line as below
//myReadStream.pipe(mywriteStream);

var server=http.createServer(function (req,res) {
  console.log("reuest made" + req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  //here will send file content to client browser instead of wriiting in files
  var myReadStream1=fs.createReadStream(__dirname+'/datasendtoserver.txt','utf8');
console.log(__dirname);
  myReadStream1.pipe(res);

//  res.end("hello komal");
});

server.listen(3000,'127.0.0.1');
console.log("you are listening to server");

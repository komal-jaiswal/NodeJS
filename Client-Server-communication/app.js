var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {
  console.log('request url'+req.URL);
res.writeHead(200,{'Content-type':'text/html'});
var readStream=fs.createReadStream(__dirname +'/test.html','utf8');
readStream.pipe(res);
});
server.listen(3000,'127.0.0.1');
console.log('you are listening server');

var serverJson=http.createServer(function (req,res) {
console.log("listening to port" + req.URL);
res.writeHead(200,{'Content-Type':'application/json'});
var myObj={
  "name":"komal",
  "lastname":"jaiswal",
  "position":"senir software engineer",
  "Location":"Bangalore"
}
res.end(JSON.stringify(myObj));
});
serverJson.listen(4000,'127.0.0.1');
console.log("you are listening to server running on port 4000");

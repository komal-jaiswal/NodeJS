var express=require('express');

var app=express();

app.get('/',function (req,res) {
  //res.writeHead(200,{'Content-Type' : 'text/plain'});
  res.send("this is home page");
});
app.get('/contact',function (req,res) {
  res.send("this is contact page");
})
app.get('/profile/:id',function (req,res) {
  res.send('you have requested for id'+ req.params.id);
})
app.listen(3000);

var express=require('express');
var app=express();
app.get('/',function (req,res) {
    // res.writeHead(200,{"Content-Type":"text/plain"});
    res.send('hello world!');
});
app.listen(3000);
//step:1 Initialize express
const express=require('express');

//step:2 Initialize app using express
const app=express();

//step:3 Define routes
//home page route(/)
app.get("/",function(req,res){
    res.send('This is the home page');
});
//notes page route(/notes)
app.get("/notes",function(req,res){
    res.send('This is the notes page');
});

//step:4 Start server on port
//here we can add the callback function but the callback function is optional,without callback function the app.listen could be "app.listen(5000)" and with callback function the app.listen could be "app.listen(5000,function(){ console.log('Server started on port 5000');})", the callback function advantage is that we can easily identify the server is started when console message printed in  the terminal 
app.listen(5000,function(){
    console.log('Server started on port 5000');
});
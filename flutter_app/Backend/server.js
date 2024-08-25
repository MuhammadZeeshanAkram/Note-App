//WE FIRST STARTS WITH EXPRESS WITH THE GIVEN STEPS AND THEN INTEGRATE THE MONGOOSE WITH THE EXPRESS

//step:1(EXPRESS) Initialize express
const express=require('express');

//step:2(EXPRESS) Initialize app using express
const app=express();


//Setup for mongooose used to connect database with the server
//step:1(MONGOOSE) Initialize mongoose
const mongoose=require('mongoose');

//step:2(MONGOOSE) Connect to database
//In this step we check whether the database is connected with the server or not by using the mongoose with the express,if the server gets started again after this then it means that the connection is established between the server and the database
mongoose.connect('mongodb://localhost:27017/NotesDB').then(function(){
    app.get("/",function(req,res){
        res.send('This is the home page');
    });
    //notes page route(/notes)
    app.get("/notes",function(req,res){
        res.send('This is the notes page');
    });
});



//step:3(EXPRESS) Define routes ..IT IS USED ABOVE WHEN COMBINED WITH MONGOOSE
//home page route(/)
// app.get("/",function(req,res){
//     res.send('This is the home page');
// });
// //notes page route(/notes)
// app.get("/notes",function(req,res){
//     res.send('This is the notes page');
// });

//step:4(EXPRESS) Start server on port
//here we can add the callback function but the callback function is optional,without callback function the app.listen could be "app.listen(5000)" and with callback function the app.listen could be "app.listen(5000,function(){ console.log('Server started on port 5000');})", the callback function advantage is that we can easily identify the server is started when console message printed in  the terminal 
app.listen(5000,function(){
    console.log('Server started on port 5000');
});



//NODEMON REFRESHSES THE LIVE SERVER SO THAT IF ANY CHANGES ARE MADE THEN IT REFLECTS IN THE LOCALHOST:5000, WE DO NOT HAVE TO CLOSE THE SERVER AND RESTART THE SERVER AGAIN,WE CAN JUST REFRESH THE SERVER AUTOMATICALLY THROUGH NODEMON
//MONGOOSE IS USED  TO CONNECT THE SERVER WITH THE DATABASE
//EXPRESS IS USED TO DEFINE THE ROUTES IN THE BACKEND SERVER
//npm install -g nodemon means that nodemon is installed globally in the pc , so that in next project i do not have to install it , I just have to use it
// First we were trying to open the server  in localhost:5000 by (node server.js) but now after downloading the nodemon we use (nodemon server.js) to start the server
//we have also added ("dev":"nodemon server.js") in the shorcuts(script in package.json file), when we run (npm run dev) it will automatically start the server through nodemon
//we changed ("dev":"nodemon server.js") to ("dev":"nodemon src/server.js") ,("dev":"node server.js") to ("dev":"node src/server.js") because we moved the server.js file to folder i.e src

//-------------------------------------------------------------------------------//
//WE FIRST STARTS WITH EXPRESS WITH THE GIVEN STEPS AND THEN INTEGRATE THE MONGOOSE WITH THE EXPRESS

//step:1(EXPRESS) Initialize express
const express = require('express');

//step:2(EXPRESS) Initialize app using express
const app = express();


//Setup for mongooose used to connect database with the server
//step:1(MONGOOSE) Initialize mongoose
const mongoose = require('mongoose');


//step:1(MODEL) importing the schema from the models
const Note = require('./models/Note');


//step:2(MODEL) (updated 1st time)
// mongoose.connect('mongodb://localhost:27017/NotesDB').then(function () {
//     app.get("/", function (req, res) {
//         res.send('This is the home page');
//     });
//     //notes page route(/notes)
//     app.get("/notes/list",async function (req, res) {//here list location is added
//         var notes= await Note.find();//it means that it will find in the database the schema/model of this kind in the database of the notesDB and then store it in the notes variable
//         //var notes= await Note.find(); means that notes is promise and the .find() is async function
//         res.json(notes);//then the data which is stored in the notes variable will be sent in the json format
//     });
// });
//step:2(MODEL)(original) merging the schema with the step 2 of mongoose
// mongoose.connect('mongodb://localhost:27017/NotesDB').then(function () {
//     app.get("/", function (req, res) {
//         res.send('This is the home page');
//     });
//     //notes page route(/notes)
//     app.get("/notes",async function (req, res) {
//         var notes= await Note.find();//it means that it will find in the database the schema/model of this kind in the database of the notesDB and then store it in the notes variable
//         //var notes= await Note.find(); means that notes is promise and the .find() is async function
//         res.json(notes);//then the data which is stored in the notes variable will be sent in the json format
//     });
// });


//step:2(MODEL)(updated 2nd time)
mongoose.connect('mongodb://localhost:27017/NotesDB').then(function () {
    app.get("/", function (req, res) {
        res.send('This is the home page');
    });
    //notes page route(/notes)
    app.get("/notes/list",async function (req, res) {//here list location is added
        var notes= await Note.find();//it means that it will find in the database the schema/model of this kind in the database of the notesDB and then store it in the notes variable
        //var notes= await Note.find(); means that notes is promise and the .find() is async function
        res.json(notes);//then the data which is stored in the notes variable will be displayed in the json format
    });
    app.get("/notes/add",async function (req, res) {
        var newNote=new Note({
            id:'001',
            userid:'zeeshansiddiqui9790@gmail.com',
            title:'My first Note',
            content:'Note Content',
            //we are not saying dateadded here because it will stored there by default
        });
        await newNote.save();//Then the data is saved to the database
        const response={message:'New Note Created'};//when the data is saved then the response variable  will be called and that  prints the message(new note created)
        res.json(response);//it will  display the message(new note created) in the json format 
    })
});



//step:2(MONGOOSE) Connect to database and add the express routes
//In this step we check whether the database is connected with the server or not by using the mongoose with the express,if the server gets started again after this then it means that the connection is established between the server and the database
// mongoose.connect('mongodb://localhost:27017/NotesDB').then(function () {
//     app.get("/", function (req, res) {
//         res.send('This is the home page');
//     });
//     //notes page route(/notes)
//     app.get("/notes", function (req, res) {
//         res.send('This is the notes page');
//     });
// });





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
app.listen(5000, function () {
    console.log('Server started on port 5000');
});



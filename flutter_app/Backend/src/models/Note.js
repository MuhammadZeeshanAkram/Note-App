//we have to make the model for our database to store the data in the particular format we want.

//Step to make a model:
//Step:1 Define schema which is used to define the details of the models
//Define schema->Note:id, userid, title, content, dateadded 
//id: the id number of the note
//userid: the id of the user who created the note
//title: the title of the note
//content: the content of the note
//dateadded: the date when the note was added

//Step:2 (create model) we made the model using the schema defined 
//Create model->Note
//Note is the name of the model
//Note is a collection in the database

//In this file we are again using mongoose


//Step:1 Making schema
const mongoose = require('mongoose');
const noteSchema=mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    //here user id is not unique because the one person can have multiple notes
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    //the content can be empty
    content:{
        type:String,
        
    },
    dateadded:{
        type:Date,
        default:Date.now,
    }
});

//Step:2 Create model
//mongoose.model("Note",noteSchema); we have successfully made the model now of the note
//step:3 (export model)
//module.exports=mongoose.model("Note",noteSchema);//we export this model so that other files can use it


module.exports=mongoose.model("Note",noteSchema);



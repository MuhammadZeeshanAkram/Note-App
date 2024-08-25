const express=require('express');
const router=express.Router();
const Note=require('./../models/Note');

router.post("/list",async function (req, res) {//here list location is added and userid is also added
    var notes= await Note.find({userid:req.params.userid});
    //here userid is the parameter which is passed in the url
    //it means that it will find in the database the schema/model of this kind of userid in the database of the notesDB and then store it in the notes variable
    //var notes= await Note.find(); means that notes is promise and the .find() is async function
    res.json(notes);//then the data which is stored in the notes variable will be displayed in the json format
});
router.post("/add",async function (req, res) {
    
    var newNote=new Note({
        id:req.body.id,
        userid:req.body.userid,
        title:req.body.title,
        content:req.body.content,
        //we are not saying dateadded here because it will stored there by default
    });
    await newNote.save();//Then the data is saved to the database
    const response={message:'New Note Created'+`id:${req.body.id}`};//when the data is saved then the response variable  will be called and that  prints the message(new note created) and prints the id also
    res.json(response);//it will  display the message
});
router.post("/delete",async function(req,res){
    await Note.deleteOne({id:req.body.id});
    const response={message:"Note Deleted"}+`id:${req.body.id}`;//when the data is saved then the response variable  will be called and that  prints the message(note deleted) and prints the id also
    res.json(response);//it will  display the message
});

module.exports=router;

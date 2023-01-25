const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/EVENTSREACTAPPDB"); // Add your DB host

// Route To Add New User
router.post('/adduser', async (req, res) => {

    bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            console.log(err);
        }
        const user = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role
        };
        const newUser = new Schemas.Users(user);
        try {
            await newUser.save(async (err, newUserResult) => {
                res.status(200).json({
                    message: "success",
                })
            });
        }
        catch (err) {
            res.end('User is not added');
        }

    });



});

// Route To Get All Users
router.get('/viewUsers', (req, res) => {


    const usersLists = Schemas.Users;
    try {
        usersLists.find({}, async (err, usersResult) => {
            // console.log(usersResult);
            res.end(JSON.stringify(usersResult));
        }, {});
        //console.log(usersResult);
        // res.end(JSON.stringify(usersLists));

    }
    catch (err) {
        res.end('no Users Found!');
    }
});

// Route To Get Todo
// router.get('/getTodo',(req, res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todosLists = Schemas.Todos;
//     try{
//             const TodoURLID = req.url.substring(req.url.lastIndexOf('todoID=')+ 7);
//             todosLists.find({todoID : TodoURLID}, async (err, newTooResult) => {
//             res.end(JSON.stringify(newTooResult));
//         },{});
//     }
//     catch(err) {
//         console.log(err);
//         res.end('ToDo not Found');
//     }
// });


// Route To ToDo Update-View
// router.post('/updateTodo', async (req,res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todo = {todoID: req.body.todoID , todoTitle: req.body.todoTitle, todoDescription: req.body.todoDescription};
//     const todosLists = Schemas.Todos;

//     try{
//         todosLists.updateOne({todoID : req.body.todoID}, todo , async (err, todoResult) => {
//             res.redirect('./Todos');
//         });
//     }
//     catch(err){
//         res.end('ToDo not updated!');
//     }
// });

// Route To Delete Todo
// router.post('/deleteTodo', async (req,res)=>{
//     mongoose.connect("mongodb://localhost/BOOKRDB");
//     const todoId = {todoID: req.body.deleteTodo };
//     const newTodo = Schemas.Todos;
//     try{
//         await newTodo.deleteOne(todoId, async (err) => {
//             res.redirect('./Todos');
//         });
//     }
//     catch(err) {
//         console.log(err);
//     }
// });


module.exports = router;

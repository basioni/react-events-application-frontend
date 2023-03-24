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
                });
                console.log((newUserResult));
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
            res.end(JSON.stringify(usersResult));
        }, {});
    }
    catch (err) {
        res.end('no Users Found!');
    }
});

// Route To Add New Task
router.post('/addtask', async (req, res) => {

    const task = {
        title: req.body.title,
        startDate: new Date(req.body.startDate),
        endDate: new Date(req.body.endDate),
        allDay: req.body.allDay
    };
    const newTask = new Schemas.Events(task);
    try {
        await newTask.save(async (err, addedTaskResult) => {
            res.status(200).json({
                message: "success",
            })
        });
    }
    catch (err) {
        res.end('Task is not added');
    }
});

// Route To Get All Tasks
router.get('/viewTasks', (req, res) => {


    const tasksLists = Schemas.Events;
    try {
        tasksLists.find({}, async (err, tasksResult) => {
            console.log(tasksResult);
            res.end(JSON.stringify(tasksResult));
        }, {});

    }
    catch (err) {
        res.end('no Users Found!');
    }
});
module.exports = router;

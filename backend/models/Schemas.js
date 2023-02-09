const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Schema 
const UsersSchema = mongoose.Schema({
    name :{
        type: String ,
        required: true
    },
    username :{
        type: String ,
        required: true
    },
    email :{
        type: String ,
        required: true
    },
    password :{
        type: String ,
        required: true
    }
    ,
    role :{
        type: String ,
        required: true
    }
});

// Events Schema 
const EventsSchema = mongoose.Schema({
    title :{
        type: String ,
        required: true
    },
    startDate :{
        type: Date ,
        required: true
    },
    endDate :{
        type: Date ,
        required: true
    },
    allDay :{
        type: Boolean ,
        required: true
    }
});

const Users = mongoose.model('Users', UsersSchema, 'Users');
const Events = mongoose.model('Events', EventsSchema, 'Events');
const mySchemas = {'Users': Users , 'Events' : Events};

module.exports = mySchemas;
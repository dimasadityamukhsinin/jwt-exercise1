const mongoose = require('mongoose');


const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    }
}, {timestamps:true})

const Users = mongoose.model('users', userSchema)

module.exports = Users;
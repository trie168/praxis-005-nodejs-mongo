const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null,
        unique: true
    },
    username: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    gender: String,
    password: {
        type: String,
        default: null
    },
    activated_at: {
        type: Date,
        default: null
    },
    activation_token: {
        type: String,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null
    }
})

let Users = mongoose.model("User", userSchema)

module.exports = Users
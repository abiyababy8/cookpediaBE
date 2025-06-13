const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true,
        default: "User"
    },
    profilePic: {
        type: String,
    }
})
const users = mongoose.model("users", userSchema)
module.exports = users
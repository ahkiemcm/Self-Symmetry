const mongoose = require('../DB/connection')
const Schema = mongoose.Schema

const User = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    height: String,
    weight: String,
    goals: String,
    logs: []
})


module.exports = mongoose.model('User', User)


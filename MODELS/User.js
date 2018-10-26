const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    Name: String,
    Age: Number,
    Height: Number,
    Weight: Number,
    Goals: String,
    Logs: [{}]
})


module.exports = mongoose.model('User', User)


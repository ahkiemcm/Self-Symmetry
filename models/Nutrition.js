const mongoose = require('../DB/connection')
const Schema = mongoose.Schema

const Nutrition = new Schema({
    date: Date,
    last_meal: [],
    last_beverage: String,
    water_intake: String,
    How_do_you_feel: String
})


module.exports = mongoose.model('Nutrition', Nutrition)


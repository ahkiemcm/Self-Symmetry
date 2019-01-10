const mongoose = require('../DB/connection')
const Schema = mongoose.Schema

const Nutrition = new Schema({
    date: { type: Date, default: Date.now },
    last_meal: String,
    last_beverage: String,
    water_intake: Number,
    how_do_you_feel: String
})


module.exports = mongoose.model('Nutrition', Nutrition)


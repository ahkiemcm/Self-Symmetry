const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Fitness = new Schema({
    Date: date,
    Last_meal: [],
    Last_beverage: String,
    Water_intake: Number,
    How_do_you_feel?: String
})


module.exports = mongoose.model('Nutrition', Nutrition)


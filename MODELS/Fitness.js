const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Fitness = new Schema({
    Date: Date,
    Exercises: [{
        workout: String,
        reps: Number,
        sets: Number,
        difficulty: Number//(level 1 - 5)
    }]
})


module.exports = mongoose.model('Fitness', Fitness)


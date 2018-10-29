const mongoose = require('../DB/connection')
const Schema = mongoose.Schema

const Fitness = new Schema({
    date: Date,
    exercises: [{
        workout: String,
        reps: Number,
        sets: Number,
        difficulty: Number//(level 1 - 5)
    }]
})


module.exports = mongoose.model('Fitness', Fitness)


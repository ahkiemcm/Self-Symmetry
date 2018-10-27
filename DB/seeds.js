const User = require('../MODELS/User')
const Fitness = require('../MODELS/Fitness')
const Nutrition = require('../MODELS/Nutrition')
const mongoose = require('../DB/connection')

const Kai_Fitness = new Fitness({
    Date: 10/15/18,
    Exercises: [{
        workout: "Squats",
        reps: 15,
        sets: 3,
        difficulty: 3//(level 1 - 5)
    }]
})

const Kai_Nutrition = new Nutrition({
    
})
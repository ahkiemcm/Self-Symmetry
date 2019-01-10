const User = require('../MODELS/User')
const Fitness = require('../MODELS/Fitness')
const Nutrition = require('../MODELS/Nutrition')
const mongoose = require('./connection')

const Xeke_Fitness = new Fitness({
    date: 10 / 15 / 18,
    workout: "Squats",
    reps: 15,
    sets: 3,
    difficulty: 3//(level 1 - 5)

})

const Xeke_Nutrition = new Nutrition({
    date: 10 / 15 / 18,
    last_meal: ["Baked chicken", "Green beans", "Mac n cheese"],
    last_beverage: "Sweet tea",
    water_intake: 48,
    how_do_you_feel: "Feeling alright, would have liked more vegetables with dinner."
})

const Xeke_log = new User({
    first_name: "Xeke",
    last_name: "Arashi",
    age: 26,
    height: "6'0",
    weight: "164 lbs",
    goals: "Get stronger, become more solid",
    Fitness_Logs: [Xeke_Fitness],
    Nutrition_Logs: [Xeke_Nutrition]
})



User.deleteMany({})
    .then(() => Fitness.deleteMany({}))
    .then(() => Nutrition.deleteMany({}))
    .then(() => Fitness.insertMany([Xeke_Fitness]))
    .then(() => Nutrition.insertMany([Xeke_Nutrition]))
    .then(() => Xeke_log.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())
const User = require('../MODELS/User')
const Fitness = require('../MODELS/Fitness')
const Nutrition = require('../MODELS/Nutrition')
const mongoose = require('./connection')

const Xeke_Fitness = new Fitness({
    Date: 10/15/18,
    Exercises: [{
        workout: "Squats",
        reps: 15,
        sets: 3,
        difficulty: 3//(level 1 - 5)
    }]
})

const Xeke_Nutrition = new Nutrition({
    Date: 10/15/18,
    Last_meal: ["Baked chicken", "Green beans", "Mac n cheese"],
    Last_beverage: "Sweet tea",
    Water_intake: "48 ounces",
    How_do_you_feel: "Feeling alright, would have liked more vegetables with dinner."
})

const Xeke_log = new User ({
    first_name: "Xeke",
    last_name: "Arashi",
    age: 26,
    height: "6'0",
    weight: "164 lbs",
    goals: "Get stronger, become more solid",
    logs: [Xeke_Fitness, Xeke_Nutrition]
})

// User.create(Xeke_log).then(user => {
//   console.log("Working", user)
// })

// If there is a store that exists, then get them all and delete them so we're starting with a clean slate to prevent overlap errors. This is best practice
User.deleteMany({})
    // This creates all of the products so we can insert them into the arrays of the stores. This is MongoDB syntax.
    .then(() => Fitness.insertMany([Xeke_Fitness]))
    .then(() => Nutrition.insertMany([Xeke_Nutrition]))
    // This creates all of the stores back again.
    .then(() => Xeke_log.save())
    // Success console prompt
    .then(() => console.log("Database seeded success"))
    // Automatically closes mongoose
    .then(() => mongoose.connection.close())
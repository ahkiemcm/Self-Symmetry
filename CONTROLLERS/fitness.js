const Fitness = require('../models/Fitness')
const User = require('../models/User')

const fitnessController = {

    index: (req, res) => {
        User.findById(req.params.id).populate('Fitness_Logs')
            .then((user) => {

                res.render('fitness/index', {
                    user: user
                })
            })
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new User
    // and upon success redirects back to the new user's page
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.findById(req.params.id).populate("Fitness_Logs")
            .then(user => {
                Fitness.create(req.body).then((newEntry) => {
                    console.log(newEntry)
                    user.Fitness_Logs.unshift(newEntry)
                    user.save()
                    res.redirect(`/user/${user._id}/fitness`)
                })


            })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with
module.exports = fitnessController
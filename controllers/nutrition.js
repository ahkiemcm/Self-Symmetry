const Nutrition = require('../models/Nutrition')
const User = require('../models/User')

const nutritionController = {

    index: (req, res) => {
        User.findById(req.params.id).populate('Nutrition_Logs')
            .then((user) => {

                res.render('nutrition/index', {
                    user: user
                })
            })
    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new user
    // and upon success redirects back to the nutrition page
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.findById(req.params.id).populate("Nutrition_Logs")
            .then(user => {
                Nutrition.create(req.body).then((newEntry) => {
                    console.log(newEntry)
                    user.Nutrition_Logs.unshift(newEntry)
                    user.save()
                    res.redirect(`/user/${user._id}/nutrition`)
                })
            })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with
module.exports = nutritionController
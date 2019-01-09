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
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: (req, res) => {
        res.send("Yooo, I'm new here")

    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single user's show page
    show: (req, res) => {
        res.render('app/fitness')


    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new User
    // and upon success redirects back to the new user's page
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.create(req.body).then((newUser) => {
            res.redirect(`/${newUser._id}`)
        })
    },

    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a user's data to it
    edit: (req, res) => {
        User.findById(req.params.id).then(user => {
            res.render('user/edit', { user: user })
        })
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the user and
    // redirects back to the SHOW PAGE (not index)
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/${updatedUser._id}`)
        })
    },
    //= =====================
    // DELETE
    //= =====================
    // Create a function that deletes the User and
    // redirects back to index page "/"
    delete: (req, res) => {
        Donut.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with
module.exports = fitnessController
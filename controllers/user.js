const User = require('../models/User')

const userController = {

    index: (req, res) => {
        User.find({})
            .then((users) => {
                console.log(users)

                res.render('user/index', {
                    users: users
                })
            })
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: (req, res) => {

        res.render('user/new')
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single user's show page
    show: (req, res) => {

        console.log(req.params)
        const userId = req.params.id
        User.findById(userId)
            .then((user) => {
                console.log(user)
                res.render('user/show', { user: user })
            })
    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new User
    // and upon success redirects back to the index page "/"
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.create(req.body)
            .then((newUser) => {
                res.redirect(`/user/${newUser._id}`)

            })
    },

    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a user's data to it
    edit: (req, res) => {
        // var userEdit = req.params.id
        console.log(req.params)
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
            res.redirect(`/user/${updatedUser._id}`)
        })
    },
    // = =====================
    // DELETE
    // = =====================
    // Create a function that deletes the User and
    // redirects back to index page "/user"
    delete: (req, res) => {
        console.log("HELLO FROM DELETE!")
        User.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/user')
        })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with
module.exports = userController
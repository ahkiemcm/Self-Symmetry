const User = require('../models/User')

const userController = {
    
    index: (req, res) => {
        // res.send("Hey whats up this is
        res.render('user/index')
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
    // Create a function that renders a single Donut's show page
    show: (req, res) => {
        // res.send('You got me to show on a page man!')
        const userId = req.params.storesId
        User.findById(userId).populate('fitness' , 'nutrition')
            .then((user) => {
                // res.send(store)
                res.render('user/show', { user: user })
            })
    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new Donut
    // and upon success redirects back to the index page "/"
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.create(req.body).then((newUser) => {
            // res.redirect(`user/${newUser._id}`)
            res.redirect('/user')
        })
    },

    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a Donut's data to it
    edit: (req, res) => {
        var userEdit = req.params.id
        User.findById(userEdit).then(user => {
            res.render('user/edit', { user: user })
        })
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the Donut and
    // redirects back to the SHOW PAGE (not index)
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/user/${updatedUser._id}`)
        })
    },
    //= =====================
    // DELETE
    //= =====================
    // Create a function that deletes the Donut and
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
module.exports = userController
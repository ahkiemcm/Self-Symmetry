const nutritionController = {

    index: (req, res) => {
        res.send("Hey whats up this is nutrition index")
        // res.render('app/index')
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: (req, res) => {
        res.send("Yooo, I'm new here")
        // res.render('')
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Donut's show page
    show: (req, res) => {
        res.send('You got me to show on a page man!')


    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new Donut
    // and upon success redirects back to the index page "/"
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
    // sends that a Donut's data to it
    edit: (req, res) => {
        User.findById(req.params.id).then(user => {
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
            res.redirect(`/${updatedUser._id}`)
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
module.exports = nutritionController
const fitnessController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all Donuts to donuts/index.hbs view
    index: (req, res) => {
        Donut.find().then((donuts) => {
            // res.render('donuts/index', {
            //   whateverIWantToCallItInHandlebars: allOfTheDonutsInMyDatabase
            // })
            res.render('donuts/index', {
                donuts: donuts
            })
        })
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: (req, res) => {
        res.render('donuts/new')
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Donut's show page
    show: (req, res) => {
        Donut.findById(req.params.id).then((donut) => {
            res.render('donuts/show', {
                donut: donut
            })
        })
    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new Donut
    // and upon success redirects back to the index page "/"
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        Donut.create(req.body).then((newDonut) => {
            res.redirect(`/${newDonut._id}`)
        })
    },

    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a Donut's data to it
    edit: (req, res) => {
        Donut.findById(req.params.id).then(donut => {
            res.render('donuts/edit', { donut: donut })
        })
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the Donut and
    // redirects back to the SHOW PAGE (not index)
    update: (req, res) => {
        Donut.findByIdAndUpdate(req.params.id, req.body).then((updatedDonut) => {
            res.redirect(`/${updatedDonut._id}`)
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
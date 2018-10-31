const Nutrition = require('../models/Nutrition')

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
    // Create a function that renders a single user's show page
    show: (req, res) => {
        res.send('You got me to show on a page man!')


    },

    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new user
    // and upon success redirects back to the nutrition page
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        Nutrition.create(req.body).then((newNutrition) => {
            res.redirect(`/${newNutrition._id}`)
        })
    },

    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page
    edit: (req, res) => {
        Nutrition.findById(req.params.id).then(nutrition => {
            res.render('nutrition/edit', { nutrition: nutrition })
        })
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the user and
    // redirects back to the SHOW PAGE (not index)
    update: (req, res) => {
        Nutrition.findByIdAndUpdate(req.params.id, req.body).then((updatedNutrition) => {
            res.redirect(`/${updatedNutrition._id}`)
        })
    },
    //= =====================
    // DELETE
    //= =====================
    // Create a function that deletes the user and
    // redirects back to index page "/"
    delete: (req, res) => {
        Nutrition.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with
module.exports = nutritionController
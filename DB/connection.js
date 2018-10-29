require('dotenv').config();
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to mongoDB")
    }).catch((e) => {
        console.log('ERROR, ABORT')
        console.log(e)
    })



// mongoose.connect('mongodb://localhost/Self-Symmetry')


// mongoose.connection.once('open', () => {
//     console.log('Mongoose has connected to MongoDB')
// })



module.exports = mongoose
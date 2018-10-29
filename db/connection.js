require('dotenv').config();
const mongoose = require('mongoose')


// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/Self-Symmetry');
}
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
}
);
mongoose.connection.once('open', function () {
    console.log("Mongoose has connected to MongoDB!");
});

module.exports = mongoose

// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log("Connected to mongoDB")
//     }).catch((e) => {
//         console.log('ERROR, ABORT')
//         console.log(e)
//     })

// mongoose.connect('mongodb://localhost/Self-Symmetry')


// mongoose.connection.once('open', () => {
//     console.log('Mongoose has connected to MongoDB')
// })



const express = require('express')
const app = express()
const overMethod = require('method-override')
const hbs = require('handlebars')
const logger = require('morgan')
const routes = require('./routes/index')
const path = require('path')


app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(overMethod('_method'))
app.set('view engine', 'hbs')
app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')));



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
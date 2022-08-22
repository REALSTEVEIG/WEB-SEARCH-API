require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const searchRouter = require('./routes/search')
const exphbs = require('express-handlebars')
const path = require('path')

app.engine("handlebars", exphbs.engine({extname: ".handlebars", defaultLayout: false}));
app.set('view engine', 'handlebars')

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/', searchRouter)

app.listen(port, () => console.log(`Server is listening on port ${port}`))
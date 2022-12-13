const path = require("path");

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views') // that's defaults, so with views folder we can delete this line

const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use(errorController.get404)

app.listen(3000);


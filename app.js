const path = require("path");

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views') // that's defaults, so with views folder we can delete this line

const shopRouter = require('./routes/shop')
const adminData = require('./routes/admin')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminData.routes)
app.use(shopRouter)

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404', {pageTitle: 'Page Not Found'})
})

app.listen(3000);


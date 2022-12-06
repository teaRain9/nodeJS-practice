const express = require('express');
const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')
const path = require("path");
const rootDir = require('./util/path')

const app = express();

app.use('/admin', adminRoutes)

app.use(shopRouter)

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000);


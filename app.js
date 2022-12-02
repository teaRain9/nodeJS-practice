const express = require('express');
const shopRouter = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const app = express();

app.use(adminRoutes)

app.use(shopRouter)

app.listen(3000);


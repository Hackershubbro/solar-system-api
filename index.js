const express = require('express')
const mongoose = require('mongoose')

const PlanetRoutes = require("./routes/PlanetRoutes")

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use('/api', PlanetRoutes)

require('./config/db');

const port = 8000;

app.listen(port, () => {
    console.log(`SERVER STARTED AT ${port}`)
})
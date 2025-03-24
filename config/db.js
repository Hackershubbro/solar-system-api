const mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb://127.0.0.1:27017/Planets")
.then(()=>{
    console.log("Connected to the database")
}).catch((err) => {
    console.log("Error connecting to the database", err);
})
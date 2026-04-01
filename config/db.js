const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to the database")
}).catch((err) => {
    console.log("Error connecting to the database", err);
})

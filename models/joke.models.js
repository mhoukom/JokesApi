// import mongoose
const mongoose = require('mongoose');

// create joke schema
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true})

// the model used to make queries to database
const Joke = mongoose.model("Joke", JokeSchema);

// export the model
module.exports = Joke;
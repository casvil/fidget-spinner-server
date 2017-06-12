//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect('mongodb://localhost/fidget-spinner');

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose.model('UserScores', { name: String, score: Number });

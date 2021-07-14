const mongoose = require('mongoose');

//recycling bin  SCHEMA 
// Schema is the structure of the recycling bin

const rbin_Schema = new mongoose.Schema({
    Block_Number: {
        type: Number, 
        required: true, 
        minlength: 3
    },
    Latitude: {
        type: String,
        required: true,
        minlength: 3
    },
    Longtitude : {
        type: String,
        required: true,
        minlength: 5
    },
    Level: {
        type: Number, 
        required: true, 
        minlength: 1
    }, 
    Postal_Code: {
        type: Number, 
        required: true,
        minlength: 3
    }
});

// export device schema out of the file
//model helps to connect to the database
module.exports = new mongoose.model('Recycling Bin', rbin_Schema);
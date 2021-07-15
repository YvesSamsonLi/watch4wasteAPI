const mongoose = require('mongoose');

//Device SCHEMA 
// Schema is the structure of the device 

const device_Schema = new mongoose.Schema({
    Block_Number: {
        type: Number, 
        required: true, 
        minlength: 3,
        maxlength: 4
    },
    Device_Id: {
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 50
    },
    Latitude: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    Longtitude : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    Level: {
        type: Number, 
        required: true, 
        minlength: 1,
        maxlength: 2
    }, 
    Postal_Code: {
        type: Number, 
        required: true,
        minlength: 3,
        maxlength:6
    },  
    Status: {
        type: String, 
        required: true, 
    }, 
    Date: {
        type: Date, 
        default: Date.now
    }
});

// export device schema out of the file
//model helps to connect to the database
module.exports = mongoose.model('device', device_Schema);
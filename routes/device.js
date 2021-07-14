const express = require('express');
const router = express.Router();
const Device = require('../models/device');

router.post('/', (req, res) => {
    console.log(req.body); 
    const device = new Device({
        Block_Number: req.body.Block_Number,
        Device_Id: req.body.Device_Id,
        Latitude: req.body.Latitude,
        Longtitude: req.body.Longtitude,
        Level : req.body.Level, 
        Postal_Code: req.body.Postal_Code,
        Status: req.body.Status
        });
        device.save() 
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

console.log("Route for Device is called")

module.exports = router;

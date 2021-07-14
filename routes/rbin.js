const express = require('express');
const router = express.Router();
const RBin = require('../models/rbin');

router.post('/', (req, res) => {
    console.log(req.body); 
    const R_Bin = new RBin({
        Block_Number: req.body.Block_Number,
        Device_Id: req.body.Device_Id,
        Latitude: req.body.Latitude,
        Longtitude: req.body.Longtitude,
        Level : req.body.Level, 
        Postal_Code: req.body.Postal_Code
        });
        R_Bin.save() 
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
});

console.log("Route for Recycling bin is called")

module.exports = router;

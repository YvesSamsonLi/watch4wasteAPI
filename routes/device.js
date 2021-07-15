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
            console.log("Route for POST Device is called")
        })
        .catch(err => {
            res.json({message: err});
        });
});

router.get('/device', async(req,res) => {
    try{
        console.log("Router for Get Device data")
        const device = await Device.find(req.params.body);
        res.json(device);
        console.log(device);
    }
    catch(err){
        res.json({message: err});
    }
})


module.exports = router;

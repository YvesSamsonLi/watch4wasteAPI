const express = require('express');
const app = express();
const winston = require('winston');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv/config");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000; 
// IMPORT ROUTES 
const device_Route = require('./routes/device');
const rBin_Route = require('./routes/rbin');

// Middlewares
app.use('/device', device_Route);
app.use('/rbin', rBin_Route);

//Create a logger 
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({all:true})
            )
        }),
      new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
      ]
  });

//throw new Error();
//Connect to DB 
mongoose.connect(
    process.env.MONGO_URL, 
    {useNewUrlParser: true})
    .then(() => {
        //console.log("connected to MongoDB Atlas");
        logger.info("info","connected to MongoDB Atlas");
    })
    .catch((error) => {
        //console.log("Something was wrong");
        logger.error("error",error.message);
    });
// Start listening to server 
app.listen(PORT, () => {
    //console.log("Connected to PORT: ", PORT);
    logger.warn("Connected to PORT: ", PORT);
});
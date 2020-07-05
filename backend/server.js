const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());

//connecting to MongoDB using MongoDB Atlas
const uri = process.env.MongoDB;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{console.log("MongoDB connected successfully")});

//createing route to the website
const routeRobin = require('./routes/robin.js');
const rCategory = require('./routes/rCategory.js');
const routeMichael = require('./routes/michael.js');

app.use('/robin', routeRobin);
app.use('/rcategory', rCategory);
app.use('/michael', routeMichael);




app.listen(port, ()=>{console.log(`Server running on port: ${port}`)});
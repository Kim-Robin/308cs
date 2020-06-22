const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connecting to MongoDB using MongoDB Atlas
const uri = process.env.MongoDB;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=>{console.log("MongoDB connected successfully")});

//createing route to the website





app.listen(port, ()=>{console.log(`Server running on port: ${port}`)});
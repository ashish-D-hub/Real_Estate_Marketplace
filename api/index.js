import express from 'express';
// To use  the above , you need to edit package.json file and add "type": "module" to it
// or use the below code
//const express = require('express');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

const app =express();
//const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello Ashish");
}

)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Edit 
// package.json
// "scripts": {
//     "dev":"nodemon api/index.js",
//     "start":"node api/index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
import User from '../models/user.model.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

export const signup=async (req,res)=> {
    // use async to handle asynchronous operations
    const {username,email,password}=req.body;
    const newUser=new User({username,email,password});
    // copy the data from req.body to newUser object
    await newUser.save();// save to database ,it will take some time
    //to save data to database
    // So await is used to wait for the save operation to complete
    // and async is used to make the function asynchronous
    // so that in that mean time other operations can be performed
    res.status(201).json({message:"User created successfully"});
    // 201 is the status code for created
     
}
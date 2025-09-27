const express = require('express');
const { test } = require('../controllers/user.controller');

const router = express.Router();

// Example route for getting user data
// router.get('/test', (req, res) => {
//     res.status(200).json({ message: 'Get user data' });
// });

router.get('/test', test);
    

// // Example route for creating a new user
// router.post('/user', (req, res) => {
//     const userData = req.body;
//     res.status(201).json({ message: 'User created', data: userData });
// });

// // Example route for updating user data
// router.put('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     const updatedData = req.body;
//     res.status(200).json({ message: `User ${userId} updated`, data: updatedData });
// });

// // Example route for deleting a user
// router.delete('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     res.status(200).json({ message: `User ${userId} deleted` });
// });

module.exports = router;
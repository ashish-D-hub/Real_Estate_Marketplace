// import express from 'express';
const express = require('express');
const {signup}  = require('../controllers/auth.controller');
const AuthRouter = express.Router();
AuthRouter.post('/signup', signup);

module.exports = AuthRouter;

 

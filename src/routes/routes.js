const Expenses = require('../models/model');

const express = require("express");
const route = new express.Router();


route.get('/', (req, res) => {
    res.status(200).render('index');
});

route.post('/expense', async (req, res) => {
    try {
        
        const insertResponse = await Expenses.insertMany(req.body);
        // console.log(insertResponse);
        res.status(201).redirect('/');

    } catch (err) {
        res.status(400).render('error', error); // Object Destructuring is used
    }
    
});

route.get('/expense', async (req, res) => {
    try {

        const expenseList = await Expenses.find();
        console.log(expenseList);
        res.status(200).send(expenseList);

   } catch (error) {
        res.status(404).render('error', error);
   }  
});

route.get('*', (req, res) => {
    res.status(404).render('error', {
        error: "The requested resource could not be found."
    });
});

// 200 -- OK
//     Standard response for successful HTTP requests.

// 201 -- Created
//     The request succeeded, and a new resource created as a result. 
//     This is typically the response sent after POST requests, or some PUT requests.

// 400 --  Bad Request
//     The server could not understand the request due to invalid syntax.

// 404 -- Not Found
//     The requested resource could not be found but may be available in the future. 
//     Subsequent requests by the client are permissible.

module.exports = route;
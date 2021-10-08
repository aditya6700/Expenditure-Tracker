const express= require("express");


const route = new express.Router();


route.get('/', (req, res) => {
    res.send("<h1>Welcome to Project Expenditure</h1>")
});

module.exports = route;
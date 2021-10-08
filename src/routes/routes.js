const express= require("express");
const route = new express.Router();


route.get('/', (req, res) => {
    res.status(200).render('index');
});

route.get('*', (req, res) => {
    res.status(404).render('error', {
        errormsg: "The requested resource could not be found."
    });
});

module.exports = route;
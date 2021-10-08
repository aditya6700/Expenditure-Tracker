const express = require('express');
const route = require('./routes/routes');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000; // using available port
const app = express();

// setting path for css and templates
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname,"../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");

// setting path for bootstrap files
app.use('/css', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js/')));
app.use('/jq', express.static(path.join(__dirname,'../node_modules/jquery/dist/')));

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


app.use(route); // using routes coming from routes.js

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
}); 
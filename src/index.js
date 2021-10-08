const express = require('express');
const route = require('./routes/routes');

const port = process.env.PORT || 3000;
const app = express();

app.use(route);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
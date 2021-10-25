const mongoose = require('mongoose');

/** From Mongoose 6.0+
 * useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex 
 * are no longer supported options. 
 * Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, 
 * and useCreateIndex are true, and useFindAndModify is false. 
 * Please remove these options from your code.
 */

mongoose.connect(`${process.env.DB_URI}${process.env.DB_NAME}`)
    .then(() => {
    console.log(`Connected successfully to database --> ${process.env.DB_NAME}`)
    }).catch(err => {
        console.log(`Error connecting to database --> ${process.env.DB_NAME}`);
        console.log(`\n${err}`);
    })
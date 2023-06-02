require('dotenv').config()
const express = require('express');
const app = express();
const path = require('node:path')
const morgan = require('morgan');
const routes = require('./routes/index');

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`The server is listening on host ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}/`)
});
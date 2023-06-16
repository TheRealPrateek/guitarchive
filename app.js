require('dotenv').config()
const express = require('express');
const app = express();
const path = require('node:path')
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const routes = require('./routes/index');

app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

require('./config/connection')

app.listen(process.env.PORT, () => {
    console.log(`The server is listening on port ${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}/`)
});


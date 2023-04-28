const express = require('express');
const app = express();
const PORT = 3000;
const path = require('node:path')
const morgan = require('morgan')

app.set('view engine', 'ejs')

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get("/", (request, response) => {
    response.render('pages/home')
});

app.get("/about", (request, response) => {
    response.render('pages/about')
});

app.get("/login", (request, response) => {
    response.render('pages/log-in')
});

app.get("/artists", (request, response) => {
    response.render('pages/artist-index')
});

app.get('/artists/:artistId', (request, response) => {
    response.render('pages/artist-song-index')
});

app.get('/tabs', (request, response) => {
    response.render('pages/song-index')
});

app.get('/tabs/:tabId', (request, response) => {
    response.render('pages/tab')
});

app.get('/profile/:userId', (request, response) => {
    response.render('pages/profile')
});

// Server

app.listen(PORT, () => {
    console.log(`The server is listening on host ${PORT}`)
    console.log(`http://localhost:${PORT}/`)
});
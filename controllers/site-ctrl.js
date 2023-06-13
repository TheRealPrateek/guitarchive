const passport = require('passport');
const User = require('../models/user-model');

module.exports = {
    home: (request, response) => {
        response.render('pages/home')
    },    
    about: (request, response) => {
        response.render('pages/about')
    },
    search: (request, response) => {
        response.render('pages/underCon')
    },
    login: (request, response) => {
        response.render('pages/log-in')
    },
    loginPost: (request, response) => {
        const {username, password, googleId} = request.body;
        const user = new User({
          username: username,
          password: password,
          googleId: googleId
        });
        request.login(user, (error) => {
            if (error) {
                console.log(error)
                response.redirect('/login')
            } else {
                passport.authenticate('local')(request, response, () => {
                response.redirect('/profile')
                })
            }
        })
    },
    register: (request, response) => {
        response.render('pages/register')
    },
    registerPost: (request, response) => {
        User.register({username: request.body.username}, request.body.password, (error, user) => {
            if (error) {
                console.log(error)
                response.redirect('/register')
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/login')
                })
            }
        })
    },
    // DO NOT CHANGE THE FOLLOWING CODE
    googleGet: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    googleRedirectGet: [
        passport.authenticate('google', {failureRedirect: '/login'}), function (request, response) {
            response.redirect('/profile')
        }
    ],
    // DO NOT CHANGE THE ABOVE CODE
    logout: (request, response) => {
        // new code as of 6/2022 - the correct logout function
        request.logout(function(err) {
        // destroy the session for the user
        if (err) { 
            return next(err); 
        }
        // redirect back to the homepage
        response.redirect('/');
        });
    },
};
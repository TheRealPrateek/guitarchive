const mongoose = require('mongoose');
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose');
const mongooseFindOrCreate = require('mongoose-findorcreate');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {Schema} = mongoose;

const userSchema = new Schema ({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(mongooseFindOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy())

// DO NOT CHANGE THE FOLLOWING CODE EXCEPT FOR LINE 45
passport.serializeUser (function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, username: user.username, name: user.displayName });
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy ({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://elegant-coat-mite.cyclic.app/auth/google/profile"
    },
    // always change line 45 to reflect the most recent version of the site (ie when you deploy)
function (accessToken, refreshToken, email, cb) {
    User.findOrCreate({ googleID: email.id }, function(error, user) {
        return cb(error, user);
    });
}))

module.exports = User;
// DO NOT CHANGE THE ABOVE CODE EXCEPT FOR LINE 45
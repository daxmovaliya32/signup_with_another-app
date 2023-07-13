const passport = require("passport");
require('dotenv').config();

const googlestratagy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new googlestratagy({
    clientID:process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
    passReqToCallback:true
},function(request,accesstoken,refreshtoken,profile,done) {
    console.log(profile);
    return done(null,profile)
}))


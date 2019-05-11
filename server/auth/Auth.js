const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// Add Users Here
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const SECRET = process.env.APP_SECRET;

const signToken = payload => jwt.sign(payload, SECRET);
console.log(signToken);

// creating user signup
passport.use('signup', new LocalStrategy({
    userNameField : 'username',
    emailField : 'email',
    passwordField : 'password'
}, async (username, email, password, done) => {
    console.log('***SignUp***');
    try {
        const user = await User.create({username,email,password});
        if(!user){
            return done(null,false, {msg: 'Unable to create user'})
        }
        console.log(user.email, user.username)
    } catch (error) {
        console.log(error);
        done(error);
    }
}
));

passport.use('login', new LocalStrategy({
    userNameField : 'username',
    passwordField : 'password'
}, async (email, password, done) => {
    try {
        console.log(email);
        // find users
        // finding users from db
        // 
        // 
        // 
        if(!user){
            return done(null, false,{msg:'user not found'})
        }

        const validateUser = await bcrypt.compare(password, user.password);
        console.log('***Checking Password', validate);
        if(!validate){
            return done(null,false, {msg:'could not validate user password'})
        }

        // return user if validated
        return done(null, user, {msg: 'User is validated and logged in'});

    } catch (error) {
        return done(error);
    }
}
));

const userAuthorized = (req,res,next) => {
    
}

module.exports = {
    userAuthorized,
    passport,
    jwtSign
}
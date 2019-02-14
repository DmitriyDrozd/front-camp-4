const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/User');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId, (err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (!user.validPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

const authenticate = passport.authenticate('local');
const successRedirect = (req, res) => {
    res.send(req.sessionID);
};

const registerUser = (req, res, next) => {
    const { firstName, lastName, password, username } = req.body;
    const newUser = new User({ firstName, lastName, password, username });

    User.create(newUser, (err, user) => {
        if (err) {
            next(err);
        }

        res.send(user).end();
    });
};

const loggedInCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }

    else res.redirect('/login');
};

module.exports = {
    authenticate,
    loggedInCheck,
    registerUser,
    successRedirect,
};
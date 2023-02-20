const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:
passport.use(new LocalStrategy(
    function(username, password, done) {
        helper.findByUsername(username, async (err, done) => {
            const matchedPassword = await bcrypt.compare(password, username.password);

            if (err) return done(err);

            if (!username) return done(null, false);

            if (matchedPassword) return done(null, false);

            return done(null, username);
        })
    }
));

// Serialize a user
passport.serializeUser((user, done) => {
    done(null, user.id);
})


// Deserialize a user
passport.deserializeUser((id, done) => {
    helper.findById(id, (err, user) => {
        if (err) return done(err, user);
        return done(null, user);
    })
})
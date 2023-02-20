// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(
    session({
        secret: "mySecret",
        cookie: { maxAge: 1000 * 60 *60 * 24, secure: true, sameSite: "none" },
        saveUninitialized: false,
        resave: false
    })
);

// Import Passport config
require("./config/passport");


// Session Config

// Passport Config
app.use(passport.initialize());

app.use(passport.session());

// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
    const user = req.user || "Guest";
    res.render("home", { user });
});


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

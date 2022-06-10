const express = require("express");

// APP CONFIGURATION
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// SETTING VIEW ENGINE
app.set("view engine", "ejs");
app.use(express.static("."));

// HOME ADDRESS
app.get("/", (req, res) => {
  res.render("Home");
});

// CONTACT PAGE ADDRESS
app.get("/contact", (req, res) => {
  res.render("Contact");
});

// DETAIL PAGE ADDRESS
app.get("/details", (req, res) => {
  res.render("Details");
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON http://localhost:${PORT}`);
});

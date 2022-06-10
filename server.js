const express = require("express");
const cors = require("cors");

// APP CONFIGURATION
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// PORT
const PORT = process.env.PORT || 8080;

// HOME ADDRESS
app.get("/", (req, res) => {
  res.send("SERVER STARTED");
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON http://localhost:${PORT}`);
});

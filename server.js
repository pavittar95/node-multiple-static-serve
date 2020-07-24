const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build/app")));


app.get("/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "build/app", "index.html"));
});

// Server starting point
app.listen(3002, () => {
  console.log("server is running on port 3002");
});

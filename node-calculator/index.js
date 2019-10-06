var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
app.set("view engine", "ejs");

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());

app.post("/", function(req, res) {
  console.log(req.body);
  var checkResult = "";
  var holder = req.body.b;
  if (holder.includes("--")) {
    checkResult = holder.replace("--", "+");
  } else {
    checkResult = holder;
  }

  try {
    holder = eval(checkResult);
  } catch (e) {
    holder = "error";
  }
  console.log(holder);
  res.send({ holder });
});
//start your server on port 3005
app.listen(3005);
console.log("Server Listening on port 3005");

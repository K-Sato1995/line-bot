var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get("/", function (req, res) {
  console.log(req);
  res.send("res get");
});

// Webhook
app.post("/", function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send("res");
});

app.listen(3000, () => console.log("The app is listening on port 3000!"));

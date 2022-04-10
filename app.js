const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

const localLocation = "http://localhost:3000"

const virtualLocation = "https://floating-waters-68800.herokuapp.com"


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render('home', {localLocation: localLocation, virtualLocation: virtualLocation});
});

app.get("/thanks", function(req, res){
  res.render('thanks', {localLocation: localLocation, virtualLocation: virtualLocation,});
});


app.listen(process.env.PORT || 3000, function () {
    console.log("We are up and running on 3000.");
});


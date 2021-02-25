var express = require("express");
var app = express();
var NotesObj = require("./develop/db/db.json");
var path = require("path");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("develop/public"));
require("./develop/routes/apiRoutes")(app);
require("./develop/routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

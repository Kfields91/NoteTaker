var express = require("express");
// var NotesObj = require("./develop/db/db.json");
var app = express();
var PORT = process.env.PORT || 8080;
// var path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api/notes", require("./routes/apiRoutes"));
app.use("/", require("./routes/htmlRoutes"));

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

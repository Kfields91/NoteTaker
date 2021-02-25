const notesObj = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const ID = require("nanoid").nanoid;

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log(notesObj);
    return res.json(notesObj);
  });

  app.post("/api/notes", function (req, res) {
    const currentCB = notesObj;

    const newestNote = {
      id: ID(),
      ...req.body,
    };
    console.log(newestNote);

    currentCB.push(newestNote);
    fs.writeFile("../db/db.json", JSON.stringify(currentCB), function () {
      res.json(currentCB);
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    const currentCB = notesObj;

    const deleteNote = currentCB.findIndex(
      (element) => element.id === req.params.id
    );

    currentCB.splice(deleteNote, 1);

    fs.writeFile("../db/db.json", JSON.stringify(currentCB), function () {
      res.json(currentCB);
    });
  });
};

const notesObj = require("../db/db.json");
const fs = require("fs");
// const path = require("path");
const ID = require("nanoid").nanoid;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(notesObj);
  return res.json(notesObj);
});

router.post("", function (req, res) {
  const currentCB = notesObj;
  console.log("json file", notesObj);
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

router.delete("/:id", (req, res) => {
  const currentCB = notesObj;

  const deleteNote = currentCB.findIndex(
    (element) => element.id === req.params.id
  );

  currentCB.splice(deleteNote, 1);

  fs.writeFile("../db/db.json", JSON.stringify(currentCB), function () {
    res.json(currentCB);
  });
});

module.exports = router;

const notesData = require("../db/db.json");
const fs = require("fs");


module.exports = function(app) {

app.get(`/api/notes`, function(req, res){
    // Reads db.json file
    fs.readFile("../db/db.json", (err, data) => {
        if(err) throw err;
        // parses string into object
        JSON.parse(data);
        // assigns variable to object
        const newObject = data;
        // gets new response and json 
        res.json(newObject);
        res.send(newObject);
    })
    console.log(`My db.JSON=` + notesData + `and` + `parsed=` + newObject);

});

app.post(`/api/notes`, function(req, res){
    const newNote = req.body;
    notesData.push(newNote);
    res.send(newNote);
    
});
   

// app.get(`/api/notes/:id`, function(req, res){
//     res.json(notesData);
//     // Need a way to delete id to delete note
//     // if(notesData[i].title === req.body){
//     //     notesData
//     // }
// })

}
const store = require("../db/store");
const router = require("express").Router();
// get notes
router.get("/notes", function(req, res) {
  store
    .getNotes()
        .then(notes => res.json(notes))
            .catch(err => res.status(500).json(err));
});

//"posts" notes
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
        .then((note) => res.json(note))
            .catch(err => res.status(500).json(err));
});

//deletes notes
router.delete("/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
            .catch(err => res.status(500).json(err));
});

module.exports = router;
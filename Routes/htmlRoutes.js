var path = require("path");
var router = require("express").Router();
// returns notes html
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// any other routes pull indexx
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = router;
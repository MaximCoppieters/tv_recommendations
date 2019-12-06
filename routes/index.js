var express = require("express");
var router = express.Router();
var programs = require("../data/programs");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express", programs });
});

module.exports = router;

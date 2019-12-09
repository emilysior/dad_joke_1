var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("search", { title: "Search" });
});

router.get("/random", function(req, res, next) {
  res.render("random", { title: "Random" });
});

router.get("/joke", function(req, res, next) {
  res.render("joke", { title: "Joke", joke: "some text" });
});

module.exports = router;

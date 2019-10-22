var express = require("express");
var burgers = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var object = {
      burgers: data
    };
    res.render("index", object);
  });
});

router.post("/api/burger", function(req, res) {
  burgers.insert([req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var id = req.params.id;
  burgers.update(true, id, function(result) {
    res.end();
  });
});

module.exports = router;

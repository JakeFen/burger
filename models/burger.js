var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll(function(result) {
      cb(result);
    });
  },
  insert: function(val, cb) {
    orm.insertOne(val, function(result) {
      cb(result);
    });
  },
  update: function(val, id, cb) {
    orm.updateOne(val, id, function(result) {
      cb(result);
    });
  }
};

module.exports = burgers;

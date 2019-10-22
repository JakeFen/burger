var connection = require("../config/connection.js");

var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(val, cb) {
    connection.query("INSERT INTO burgers (burger_name) VALUES(?)", [val], function(err, result) {
        if(err) throw err;
        cb(result);
    });
  },

  updateOne: function(val, id, cb) {
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [val, id], function(err, result) {
        if(err) throw err;
        cb(result);
    });
  }
};

module.exports = orm;
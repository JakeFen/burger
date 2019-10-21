var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableName, cb) {
    connection.query("SELECT * FROM ??", [tableName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(tableName, val, cb) {
    connection.query("INSERT INTO ?? (??) VALUES(?)", [tableName, val], function(err, result) {
        if(err) throw err;
        cb(result);
    });
  },

  updateOne: function(tableName, col, val, cb) {
    connection.query("UPDATE ?? SET ?? = ? WHERE ?", [tableName, col, val], function(err, result) {
        if(err) throw err;
        cb(result);
    });
  }
};

module.exports = orm;
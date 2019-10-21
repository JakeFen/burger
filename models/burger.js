var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burger", function(result) {
            cb(result);
        })
    },
    insert: function(val, cb) {
        orm.insertOne("burger", val, function(result) {
            cb(result);
        })
    },
    update: function(val, cb) {
        orm.updateOne("burger", "devoured", val, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;
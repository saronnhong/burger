var connection = require("../config/connection.js");

var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES (?, ?)"
    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function (table, colsToUpdate, id, cb) {
    var queryString = "UPDATE ?? SET ? WHERE id = ?";
    connection.query(queryString, [table, colsToUpdate, id], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
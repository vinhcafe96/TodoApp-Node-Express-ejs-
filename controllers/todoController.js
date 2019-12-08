var bodyParser = require("body-parser");

// var mongoose = require("mongoose");

var data = [
  { item: "task 1" },
  { item: "task 2" },
  { item: "task 3" } ];

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get("/", function (req, res) {
    res.render('todo', { todos: data});
  });

  app.post("/todo", urlencodedParser, function(req, res) {
    data.push(req.body);
    res.json({ todos: data });
  });

  app.delete("/todo/:item", function(req, res) {
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};

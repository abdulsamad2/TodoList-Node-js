const Todo = require("../model/todoModel");
const catchAsync = require("../utils/catchAsync");

exports.createTodo = catchAsync(async (req, res, next) => {
  const { name, description, date } = req.body;
  if (!name || !description || !date) {
    return res.render("index", {
      message: "Please fill in all fields!",
    });
  }

  const todos = await Todo.create({
    name,
    description,
    date,
  });

  res.redirect("/");
});

exports.getAllTodos = catchAsync(async (req, res, next) => {
  const todos = await Todo.find();
  res.render("index", { todos });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const todos = await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.redirect("/");
});

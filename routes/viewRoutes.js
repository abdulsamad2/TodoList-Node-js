const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todoController");

router.get("/", TodoController.getAllTodos);
router.post("/", TodoController.createTodo);
router.delete("/:id", TodoController.deleteTodo);
router.patch("/:id", TodoController.updateTodo); // PATCH route for updating todo

module.exports = router;

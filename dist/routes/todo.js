"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: "data stored ", todos: todos, newTodo });
});
router.put("/todo/:id", (req, res) => {
    const tid = req.params.id;
    const todoIndex = todos.findIndex((el) => el.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: tid, text: req.body.text };
        return res.status(200).json({ message: "added to list", todos });
    }
});
router.delete("/todo/:id", (req, res, next) => {
    const tid = req.params.id;
    todos = todos.filter((el) => el.id !== tid);
    res.status(400).json({ message: "item deleted", todos: todos });
});
exports.default = router;

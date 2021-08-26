const express = require("express");
const app = express();
const Trie = require("trie.js");

let operations = [];

// function enqueue(operation) {
//     const ready = Promise.all(operations)
//     operations.push(operation);
// }

let tree = new Trie("");
app.get("/", (req, res) => res.json(tree.display()));
app.get("/reset", (req, res) =>
    res.json((tree = new Trie("") || tree.display())),
);
app.get("/add/:keyword", (req, res) =>
    res.json(tree.add(req.params.keyword) || tree.display()),
);
app.post("/add/:keyword", (req, res) =>
    res.json(tree.add(req.params.keyword) || tree.display()),
);
app.get("/delete/:keyword", (req, res) =>
    res.json(tree.delete(req.params.keyword) || tree.display()),
);

app.delete("/delete/:keyword", (req, res) =>
    res.json(tree.delete(req.params.keyword) || tree.display()),
);
app.get("/contains/:keyword", (req, res) =>
    res.json(tree.contains(req.params.keyword)),
);
app.get("/autocomplete/:keyword", (req, res) =>
    res.json(tree.autocomplete(req.params.keyword)),
);
// export 'app'
module.exports = app;

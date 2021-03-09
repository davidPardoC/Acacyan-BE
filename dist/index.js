"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Create a new express app instance
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("App is listening on port 3001!");
});
//# sourceMappingURL=index.js.map
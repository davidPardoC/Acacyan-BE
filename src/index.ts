import express = require("express");
// Create a new express app instance
const app: express.Application = express();
app.get("/", (req, res) => {
  res.json({message:'Hello World'})
});
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

import express = require("express");
const app: express.Application = express();
/* MiddleWares */
app.use(express.json())

/* Database Connection */
require('./database')
/* Routes */
const notesRouter = require('./routes/note')

app.get("/", (req, res) => {
  res.json({message:'Hello World'})
});

/* Routes */
app.use('/notes', notesRouter)

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

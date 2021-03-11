const express = require("express");
const verifyToken = require("./middleware/auth");
const cors = require('cors')
const app = express();
/* MiddleWares */
app.use(cors())
app.use(express.json())

/* Database Connection */
require('./database')

/* Routes */
const notesRouter = require('./routes/note');
const userRouter = require('./routes/user')

app.get("/", (req, res) => {
  res.json({message:'Hello World'})
});


/* Routes */
app.use('/notes',verifyToken, notesRouter)
app.use('/users', userRouter)

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});

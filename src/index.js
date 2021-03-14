const express = require("express");
const verifyToken = require("./middleware/auth");
const cors = require('cors')
const app = express();
const port = 3000 || process.env.PORT

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

app.listen(port, () => {
  console.log("App is listening on port 3000!");
});

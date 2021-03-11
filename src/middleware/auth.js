const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader;
  if (token) {
    let verify = jwt.verify(token, "cocoa", (err,decoded)=>{
        if(err){
            return res.status(500).json(err)
        }else{
            next()
        }
    });
  } else {
    return res.status(401).json({ error: "No token provided" });
  }
  /* next() */
};

module.exports = verifyToken;

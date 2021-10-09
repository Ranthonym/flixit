const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
      if (error) res.status(403).json("Invalid token");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("User not authenticated");
  }
};

module.exports = verify;

const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
  const token= req.headers["x-access-token"];

  if(!token) {
    console.log("verifyJWT : No token in the header request");
    return res.status(200).json({ status: 200, auth: false, message: "No Token"});
  }
  else {
    jwt.verify(token, "jwtToBeSecret", (err, decoded) => {
      if(err) {
        console.log("Bad Token");
        console.log("token : " + token);
        res.status(200).json({ status: 200, auth: false, message: "Bad Token"})
      }
      else {
        req.decodedId = decoded.id
        next();
      }
    })
  }
}

exports.createJWT = (userId) => {
  const token = jwt.sign({userId}, "jwtToBeSecret", {
      expiresIn: 10
  })
  return token;
}

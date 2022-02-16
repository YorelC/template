const {createJWT} = require('./tokenControllers');
const TestServices = require('../services/testServices');

// Register User
exports.co = async function(req, res) {
  try {
    const result = await TestServices.co(req.body);

    if(result.message === "Co success") {
      const token = createJWT(result.userId);

      return res.status(200).json({
        status: 200,
        message: "Co success",
        token: token
      });
    }
    else {
      return res.status(200).json({ status: 200, message: result.message });
    }
  } catch(e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}


exports.token_ok = async function(req, res) {
  console.log("token_ok")
  res.status(200).json({status: 200, message: "Good token"})
}

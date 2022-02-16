const {Test} = require('../models/testModel');

exports.signup = async function(body) {
  let emailExist = {};
  let profileExist = {};

  try {
    testExist = await Test.findOne({ data: body.data});
  } catch(err) {
      console.log("Erreur recherche test");
      throw Error('Erreur recherche test')
  }


  if(testExist !== null) {
    return ({
      message: 'Test existant'
    });
  }

  else {
    let newTest = new Test({
      data: body.data,
      data2: body.data2
    });

    newTest.save(function(err) {
      if(err) {
        console.log("Erreur ajout test");
        throw Error('Erreur ajout test')
      }
    })

    let resultToSend = {
      message: "Co success"
    };

    return resultToSend;
  }
}

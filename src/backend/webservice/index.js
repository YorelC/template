const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// const testRoutes = require('./routes/testRoutes.js');

var corsOptions = {
  origin: "http://54.37.15.211:3000" // port myproject to change
};

app.use(cors(corsOptions));

// Set database connection //TODO Apply env var for user and password
mongoose.connect('mongodb://172.27.0.1:27017/myproject',
  {
    useNewUrlParser: true,
    // user: process.env.USER_NAME_DB,
    // pass: process.env.PASSWORD_DBJ
    user: "myproject",
    pass: "1234"
  },
  function(error){
    if(error) {
      console.log("Errueur co mother fucker");
      console.log(error);
    } else
      console.log("connection successful");
  }
)

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

//  Connect all our routes to our application
// app.use('/test', testRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//convert the request data to json
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
mongoose
  .connect("mongodb://localhost/project", {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.log("====================================");
    console.log(err);
    console.log("====================================");
    process.exit(1);
  });
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contact: Number,
});
const User = mongoose.model("User", userSchema);

//http post method you can use app.delete, app.get, or app.post
app.post("/register", async function (req, res) {
  console.log("====================================");
  console.log(req.body);
  console.log("====================================");
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contact: req.body.contact,
  });
  await user.save();
  //mongodb will generate a unique id
  res.send(user._id);
});

//create the server in http://localhost:5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("====================================");
  console.log(`Listening on port ${port}...`);
  console.log("====================================");
});

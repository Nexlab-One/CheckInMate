const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//convert the request data to json
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParser.json());

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
  userID: String,
});
const User = mongoose.model("User", userSchema);

//For Store and Location Details
const storeSchema = new mongoose.Schema({
  storeName: String,
  storeID: String,
  location: Number,
});
const Store = mongoose.model("Store", storeSchema);

const checkinSchema = new mongoose.Schema({
  storeID: String,
  userID: String,
});

const CheckIn = mongoose.model("CheckIn", checkinSchema);

//Set Store Location
app.post("/registerStore", async function (req, res) {
  const store = new Store({
    storeName: req.body.storeName,
    storeID: generateID(),
    location: req.body.location,
  });
  await store.save();
  res.send(store.storeID);
});

app.put("/checkinlocation", async function (req, res) {
  const store = await Store.find({ storeID: req.body.storeID });
  if (!store) {
    res.status(400).send("Store doesn't exist");
  }
  const user = await User.find({ userID: req.body.userID });

  if (!user) {
    res.status(400).send("User doesn't exist");
  }
  const checkin = new CheckIn({
    storeID: req.body.storeID,
    userID: req.body.userID,
  });
  await checkin.save();
  res.send("Success");
});

//http post method you can use app.delete, app.get, or app.post
app.post("/register", async function (req, res) {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contact: req.body.contact,
    userID: generateID(),
  });
  await user.save();
  res.send(user.userID);
});

app.put("/findUser", async (req, res) => {
  let user = await User.findOne({ showID: req.body.showID });
  if (!user)
    user = {
      firstName: "Error, This Does Not Exist",
      lastName: "Error, This Does Not Exist",
      contact: 0,
      showID: "Error, This Does Not Exist",
      error: true,
    };
  res.send(user);
});

//Generate User ID
function generateID() {
  var key = {
    i: "w",
    l: "x",
    o: "y",
    u: "z",
  };
  var randomInt = Math.floor(Math.random() * 1e9);
  console.log(
    randomInt.toString(32).replace(/[ilou]/, function (a) {
      return key[a];
    })
  );
  return randomInt.toString(32).replace(/[ilou]/, function (a) {
    return key[a];
  });
}

//create the server in http://localhost:5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("====================================");
  console.log(`Listening on port ${port}...`);
  console.log("====================================");
});

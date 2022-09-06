const express = require("express");
const router = express.Router();
const users = require("../dbModels/users");

router.get("/", async (req, res) => {
  try {
    const user = await users.find();
    res.json({
      error: false,
      data: user,
      message: "User list",
    });
  } catch (err) {
    res.json({
      error: true,
      message: "Something went Wrong",
      data: err,
    });
  }
});

router.post("/adduser", async (req, res) => {
  console.log(req?.body);
  const user = new users({
    firstname: req.body?.firstname,
    lastname: req.body?.lastname,
    mailid: req.body?.mail,
    password: req.body?.password,
    roles: req.body?.roles,
    active: req.body?.active,
  });

  try {
    const users = await user.save();
    console.log(users);
    if (users) {
      res.json({
        error: false,
        data: users,
        message: "User created Successfuly",
      });
    } else {
      res.json({
        error: true,
        message: "Something Went Wrong",
      });
    }
  } catch (err) {
    if (err?.keyPattern?.mailid) {
      res.json({
        error: true,
        message: "Mail Id is Already Registered",
        data: err,
      });
    } else {
      res.json({
        error: true,
        message: "Something Went Wrong",
        data: err,
      });
    }
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("this is sample one");
});

router.get("/:id", (req, res) => {
  if (!req.params.id) {
    res.status(404).send({
      error: true,
      message: "den*g poendi gaa api",
      data: `${req.params.id}`,
    });
  }
  res.status(200).send({
    error: false,
    message: "pani chasthundi kabata ee msg vasthundi ",
    data: `${req.params.id}`,
  });
});

module.exports = router;

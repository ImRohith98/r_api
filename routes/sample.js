const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ref
 *   description: edi rasadi ref ki raa neku motham raduu gaa
 */

// get method ki ele rayalii raa

/**
 * @swagger
 * /sample:
 *   get:
 *     summary: edi just sample ki matharama edi pani chayaduu
 *     tags: [ref]
 *     responses:
 *       200:
 *         description: this is for testing
 */

router.get("/", (req, res) => {
  res.status(200).send("this is sample one");
});

/**
 * @swagger
 * /sample/{id}:
 *   get:
 *     summary: edi prams ki sample.
 *     tags: [ref]
 *     description: ado okati pampu raa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: nuvu adi pamuthavo nenu kuda ada pamputha
 *       404:
 *         description: den*g poendi gaa api
 */

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

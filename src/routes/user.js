const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, age, email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        name,
        age,
        email,
      });

      await user.save();
      res.status(200).send({ message: "User created successfully" });
    } else {
      res.status(401).send({ error: "User already exist!" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

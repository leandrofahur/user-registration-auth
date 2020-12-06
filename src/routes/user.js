const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Read all
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send();
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).send();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send();
  }
});

// Update
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

// Delete
router.delete("/");

module.exports = router;

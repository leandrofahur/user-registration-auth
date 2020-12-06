const connectdb = require("../config/db");
const express = require("express");
const app = express();

const PORT = process.env.PORT | 3001;

connectdb();

// General configuration:
app.use(express.json({ extended: false }));

// Routes:
app.use("/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.status(200).send("API Request");
});

app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to One Express Boilerplate</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

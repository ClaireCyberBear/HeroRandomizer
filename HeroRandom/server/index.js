const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/heroes", (req, res) => {
  res.send("List of heroes will be returned here");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Updated at: Sun Oct 27 22:12:34 IST 2024");
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

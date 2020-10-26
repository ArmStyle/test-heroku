var express = require("express");
var app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ result: "ok", data: [1, 2, 3, 4, 5] });
});

app.listen(PORT, () => {
  console.log("runnnn", PORT);
});

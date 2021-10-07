const express = require("express");
const app = express();
app.use(express.static(__dirname + "./public"));
app.get("/", (req, res) => {
  res.send("Hello worldd");
});
app.listen(8080);

const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(cors());

app.get("/userinfo", (req, res) => {
  res.send(JSON.stringify(os.userInfo()));
});

app.get("/arch", (req, res) => {
  res.send(os.arch());
});

app.get("/hostname", (req, res) => {
  res.send(os.hostname());
});

app.get("/totalmemory", (req, res) => {
  res.send((os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB");
});

app.get("/freememory", (req, res) => {
  res.send((os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB");
});

app.listen(5000, () => console.log("Server running on 5000"));

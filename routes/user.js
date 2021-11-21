const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test susccessfull");
});

router.post("/userpost", (req, res) => {
  const username = req.body.username;
  res.json(username);
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("This is post route");
});

router.get("/list", function (req, res, next) {
  const users = [
    { name: "Test Post 1", desc: "This is test description 1" },
    { name: "Test Post 2", desc: "This is test description 2" },
    { name: "Test Post 3", desc: "This is test description 3" },
  ];

  res.status(200).json({ status: true, data: users });
});

module.exports = router;

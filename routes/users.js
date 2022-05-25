var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/list", function (req, res, next) {
  const users = [
    { name: "Test 1", email: "test1@gmail.com" },
    { name: "Test 2", email: "test2@gmail.com" },
    { name: "Test 3", email: "test3@gmail.com" },
  ];

  res.status(200).json({ status: true, data: users });
});

module.exports = router;

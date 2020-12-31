const express = require("express");
const router = express.Router();
const middleware =require("../middleware/middlewares")
/* GET home page. */
router.get("/", function (req, res, next) {
  /*  res.send("Hello World"); */
  res.json({ message: "Hello Nodejs World , I am coming" });
});
router.get("/userinfo",
function (req, res, next) {
console.log("Method:", req.method)
next();
},

 function (req, res, next) {
  res.json({
    userName:'nahidkishore',
    name: "Nahidul Islam",
    Goal: "Full stack developer",
   
  });
});

router.get('/journey', middleware.first,middleware.second, middleware.third)
module.exports = router;

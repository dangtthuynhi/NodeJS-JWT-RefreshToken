var express = require('express');
var router = express.Router();
const controller = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//Trang login
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
//Trang signup
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* 首页路由 */
router.get('/', function (req, res, next) {
  res.send('test')
});

module.exports = router;

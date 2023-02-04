var express = require('express');
var router = express.Router();
router.get('/getData', (req, res, next) => {
  res.send('这是返回的一个get请求')
})
router.post('/postData', (req, res, next) => {
  let obj = req.body
  res.send(`该用户的年龄是：${obj.age}，该用户的姓名是：${obj.name}`)
})
module.exports = router
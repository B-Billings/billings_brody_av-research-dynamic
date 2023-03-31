var express = require('express');
var router = express.Router();

router.get('/video', function (req, res, next) {
  res.render('video', { title: 'Videos page' });
});



module.exports = router;
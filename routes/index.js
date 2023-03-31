var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Brody Billings AV Assignment' });
});

router.get('/video', function (req, res, next) {
  res.render('video', { title: 'Videos Page' });
});

router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'Audio Page' });
});
module.exports = router;

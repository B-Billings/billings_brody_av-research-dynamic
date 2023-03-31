var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'Videos page' });
});

// router.get('/team/:member', function (req, res) {
//   console.log('req.params.member');
//   res.render('team', { person: team[req.params.member] });
// })

module.exports = router;
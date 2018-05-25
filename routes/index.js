var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messiahj' });
});

router.get('/videos', function(req, res, next) {
  res.render('shared/videos', { title: 'Messiahj Videos' });
});

router.get('/photos', function(req, res, next) {
  res.render('shared/photos', { title: 'Messiahj Photos' });
});

router.get('/music', function(req, res, next) {
  res.render('shared/music', { title: 'Messiahj Music' });
});

router.get('/contact', function(req, res, next) {
  res.render('shared/contact', { title: 'Messiahj Contact Us' });
});

module.exports = router;
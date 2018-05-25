var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'Videos' });
});

router.get('/photos', function(req, res, next) {
  res.render('photos', { title: 'Photos' });
});

router.get('/music', function(req, res, next) {
  res.render('music', { title: 'Music' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
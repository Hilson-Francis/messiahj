var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messiahj' });
});

router.get('/music', function(req, res, next) {
  res.render('shared/music', { title: 'Messiahj Music', page: 'Music' });
});

router.get('/videos', function(req, res, next) {
  res.render('shared/videos', { title: 'Messiahj Videos', page: 'Videos' });
});

router.get('/photos', function(req, res, next) {
  res.render('shared/photos', { title: 'Messiahj Photos', page: 'Photos' });
});

router.get('/contact', function(req, res, next) {
  res.render('shared/contact', { title: 'Messiahj Contact Us', page: 'Contact' });
});

module.exports = router;
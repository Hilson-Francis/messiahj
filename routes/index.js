var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messiah Jay Music', page: 'home' });
});

router.get('/music', function(req, res, next) {
  res.render('shared/music', { title: 'Messiah Jay Music', page: 'music' });
});

router.get('/videos', function(req, res, next) {
  res.render('shared/videos', { title: 'Messiah Jay Videos', page: 'videos' });
});

router.get('/photos', function(req, res, next) {
  res.render('shared/photos', { title: 'Messiah Jay Photos', page: 'photos' });
});

router.get('/contact', function(req, res, next) {
  res.render('shared/contact', { title: 'Messiah Jay Contact Information', page: 'contact' });
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
	res.render('user/login', { title: 'Messiahj Login' });
});

router.get('/manager', ensureAuthenticated, function(req, res){
	res.render('user/manager', { title: 'Messiahj Manager' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/user/login');
	}
}

module.exports = router;
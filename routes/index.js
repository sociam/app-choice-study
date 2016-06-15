var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Play Store!' });
});


/* Evaluate one app. */
router.get('/1-gstore', function(req, res) {
    res.render('1-gstore', { title: 'Google Play Store!' });
});

/* GET Hello World page. */
router.get('/1-sensitivity', function(req, res) {
    res.render('1-sensitivity', { title: 'Google Play Store!' });
});

/* Evaluate one app. */
router.get('/1-grade', function(req, res) {
    res.render('1-grade', { title: 'Google Play Store!' });
});

/* Compare two apps. */
router.get('/two-grades', function(req, res) {
    res.render('two-grades', { title: 'Google Play Store!' });
});

/* Compare two apps. */
router.get('/pinterest', function(req, res) {
    res.render('pinterest', { title: 'Google Play Store!' });
});

/* Compare two apps. */
router.get('/pinterest-grade', function(req, res) {
    res.render('pinterest-grade', { title: 'Google Play Store!' });
});

/* Compare two apps. */
router.get('/pinterest-dci', function(req, res) {
    res.render('pinterest-dci', { title: 'Google Play Store!' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Google Play Store!' });
});


/* Evaluate one app. */
router.get('/wallet-store', function(req, res) {
    res.render('store-wallet', { title: 'Google Play Store!' });
});

/* GET Hello World page. */
router.get('/transport-store', function(req, res) {
    res.render('store-transport', { title: 'Google Play Store!' });
});

/* Evaluate one app. */
router.get('/weight-store', function(req, res) {
    res.render('store-weight', { title: 'Google Play Store!' });
});

/* Evaluate one app. */
router.get('/barcode-store', function(req, res) {
    res.render('store-barcode', { title: 'Google Play Store!' });
});

/* Evaluate one app. */
router.get('/friends-store', function(req, res) {
    res.render('store-friends', { title: 'Google Play Store!' });
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

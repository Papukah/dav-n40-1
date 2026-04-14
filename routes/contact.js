var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'კონტაქტი',
        email: 'info@portfolio.ge',
        isAvailableForHire: true
    });
});

module.exports = router;
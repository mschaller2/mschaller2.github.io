var express = require('express');

var router = express.Router();

module.exports = router;


router.get('/', (req, res) => {
    res.render('pages/index')
});

router.get('/blog1', (req, res) => {
    res.render('pages/blog1')
});

router.get('/blog2', (req, res) => {
    res.render('pages/blog2')
});

router.get('/documents/Resume.pdf', (req, res) => {
    res.sendFile('/documents/Resume.pdf', {root: './'})
});
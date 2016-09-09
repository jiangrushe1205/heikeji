var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/article/create', function(req, res) {
    res.render('article', { title: '创建文章' });
});

module.exports = router;
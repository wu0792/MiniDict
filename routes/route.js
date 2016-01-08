var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: '迷你词典-首页'
    });
});

router.get('/d/:id', function (req, res, next) {
    var id = req.params.id;

    res.render('detail', {
        title: '迷你词典-详细',
        id: id
    });
});

module.exports = router;
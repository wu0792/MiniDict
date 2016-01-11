var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: '迷你词典-首页'
    });
});

router.get('/d/:id', function (req, res, next) {
    var id = req.params.id;
    var item = {
        name: '巴山夜雨',
        desc: '指客居异地又逢夜雨缠绵的孤寂情景。',
        exams: [
            {
                content: '好一个巴山夜雨，好词啊好词~~'
            },
            {
                content: '说的真是巴山夜雨啊。'
            }],
        sames: [
            {
                id: 2,
                name: '巴山蜀水'
            },
            {
                id: 3,
                name: '巴高望上'
            }],
        opposites: [
            {
                id: 4,
                name: '夙兴夜寐'
            },
            {
                id: 5,
                name: '天方夜谭'
            }
        ]
    };

    res.render('detail', {
        title: '迷你词典-详细',
        id: id,
        item: item
    });

});

module.exports = router;
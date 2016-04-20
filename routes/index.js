var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    inf: [{
    dateL: '23:32',
    dateR: '23.Feb.2015',
    pos: '北京·朝阳·中心',
    trd: '高圆圆逛超市',
    inf: '小飞飞',
    bgi: '/images/photo1.jpg',
    head: 'images/h1.png'
  },
  {
    dateL: '12.24',
    dateR: '25.Jan.2017',
    pos: '重庆·南山',
    trd: '高圆圆逛超市高圆圆逛超市高圆圆逛超市高圆圆逛超市高圆圆逛超市',
    inf: '高圆圆',
    bgi: '/images/photo2.jpg',
    head: 'images/h1.png'
  },
  {
    dateL: '12:20',
    dateR: '27.Feb.2016',
    pos: '中国·河北',
    trd: '这里是内容介绍介绍这里是内容介绍介绍',
    inf: '王',
    bgi: '/images/photo3.jpg',
    head: 'images/h1.png'
  },
  {
    dateL: '23:32',
    dateR: '23.Feb.2015',
    pos: '北京·朝阳·中心',
    trd: '高圆圆逛超市',
    inf: '小飞飞',
    bgi: '/images/photo4.jpg',
    head: 'images/h2.png'
  },
  {
    dateL: '12.24',
    dateR: '25.Jan.2017',
    pos: '重庆·南山',
    trd: '高圆圆逛超市高圆圆逛超市高圆圆逛超市高圆圆逛超市高圆圆逛超市',
    inf: '高圆圆',
    bgi: '/images/photo5.jpg',
    head: 'images/h2.png'
  },
  {
    dateL: '12:20',
    dateR: '27.Feb.2016',
    pos: '中国·河北',
    trd: '',
    inf: '王',
    bgi: '/images/photo6.jpg',
    head: 'images/h1.png'
  }]
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res){
  res.render('about', {title:'About me'});
});

router.get('/project', function(req, res){
  res.render('project', {title:'About my project'});
});
router.get('/service', function(req, res){
  res.render('service', {title:'About my service'});
});
router.get('/contact', function(req, res){
  res.render('contact', {title:'About contact'});
});

module.exports = router;

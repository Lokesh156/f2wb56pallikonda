var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forest', { title:'search results- forest'});
});

module.exports = router;

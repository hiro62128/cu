var express = require('express');
var router = express.Router();

/* GET hello page. */
router.get('/hello', function(req, res, next) {
  res.render('hello', { title: 'Hello Page' });
});

module.exports = router;

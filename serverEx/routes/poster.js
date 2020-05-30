var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use('/main', require('./user'));//수정중

module.exports = router;

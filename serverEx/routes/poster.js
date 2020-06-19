var express = require('express');
var router = express.Router();
const postController = require('../controller/postController');

/* GET users listing. */
router.get('/main', postController.readMainPost);
router.get('/current', postController.readCurrentPost);
router.get('/scrab', postController.readScrabPost);
router.get('/taste', postController.readTastePost);
router.get('/playlist', postController.readPlaylistPost);
router.get('/detail', postController.readDetailPost);

module.exports = router;

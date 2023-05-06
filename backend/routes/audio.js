const express = require('express');
const { convertIntoText } = require('../controller/convertIntoText');
const multer = require('multer');




const upload = multer();

const router = express.Router();


router.post('/audio', upload.any('file'), convertIntoText);

router.get('/', function (req, res) {

    res.send('Welcome ');
});

module.exports = router;
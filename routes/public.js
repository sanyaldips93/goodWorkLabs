const express = require('express');

const controller = require('../controller/ctrlPublic');

const router = express.Router();

router.post('/get-meta-data', controller.postMetaData);

module.exports = router;

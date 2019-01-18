'use strict';
/**
 * エントリポイントルーティング
 */
const express = require('express');
const router = express.Router();

router.use('/login', require('./login.js'));
router.use('/post', require('./postThread.js'));
router.use('/register', require('./register.js'));
router.use('/view', require('./viewThread.js'));
router.use('/searchList', require('./searchList.js'));

module.exports = router;

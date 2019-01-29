'use strict';
/**
 * エントリポイントルーティング
 */
const express = require('express');
const router = express.Router();

router.use('/login', require('./login.js'));
router.use('/postThread', require('./postThread.js'));
router.use('/register', require('./register.js'));
router.use('/viewThread', require('./viewThread.js'));
router.use('/searchList', require('./searchList.js'));

module.exports = router;

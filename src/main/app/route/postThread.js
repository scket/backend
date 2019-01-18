'use strict';
/**
 * スレッド投稿エントリポイント
 */

const express = require('express');
const router = express.Router();

router.post('/',function(req,res){
    res.json({
        message:"post"
    });
});

module.exports = router;

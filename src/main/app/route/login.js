'use strict';
/**
 * ユーザログインエントリポイント
 */
 
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.json({
        message:"login"
    });
});

module.exports = router;

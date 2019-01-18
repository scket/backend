'use strict';
/**
 * スレッドリスト検索エントリポイント
 */
 
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.json({
        message:"searchList"
    });
});

module.exports = router;

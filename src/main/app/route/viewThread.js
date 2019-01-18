'use strict'
/**
 * 案件詳細参照エントリポイント
 */
 
const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.json({
        message:"view"
    });
});

module.exports = router;

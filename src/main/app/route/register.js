'use strict';
/**
 * ユーザ登録エントリポイント
 */

const express = require('express');
const router = express.Router();
const RegisterRequestBody = require('../entity/registerRequestBody');

router.post('/',function(req,res){
  const registerRequestBody = new RegisterRequestBody(req.body.name, req.body.homeAddress, req.body.mailAddress);

    res.json({
        message: registerRequestBody.name
    });
});

module.exports = router;

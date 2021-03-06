'use strict';
/**
 * ユーザ登録エントリポイント
 */

const express = require('express');
const router = express.Router();
const RegisterRequestBody = require('../entity/registerRequestBody');
const RegisterService = require('../../domain/service/registerService');

router.post('/',function(req,res){
  const registerRequestBody = new RegisterRequestBody(req.body.name, req.body.homeAddress, req.body.mailAddress);
  const registerService = new RegisterService(registerRequestBody);
  sendResponse(registerService, res);
});

async function sendResponse(registerService, res) {
  res.json(await registerService.run())
}

module.exports = router;

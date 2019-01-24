'use strict';
/**
 * ユーザログインエントリポイント
 */

const express = require('express');
const router = express.Router();
const LoginRequestBody = require('../entity/loginRequestBody');
const LoginService = require('../../domain/service/loginService');

router.post('/',function(req,res){
  const loginRequestBody = new LoginRequestBody(req.body.mailAddress);
  const loginService = new LoginService(loginRequestBody);
  sendResponse(loginService, res);
});

async function sendResponse(loginService, res) {
  res.json(await loginService.run())
}

module.exports = router;

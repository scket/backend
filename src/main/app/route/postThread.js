'use strict';
/**
 * スレッド投稿エントリポイント
 */

const express = require('express');
const router = express.Router();
const PostThreadRequestBody = require('../entity/postThreadRequestBody');
const PostThreadService = require('../../domain/service/postThreadService');

router.post('/',function(req,res){
  const postThreadRequestBody = new PostThreadRequestBody(req.body.title, req.body.userName, req.body.content);
  const postThreadService = new PostThreadService(postThreadRequestBody);
  sendResponse(postThreadService, res);
});

async function sendResponse(postThreadService, res) {
  res.json(await postThreadService.run())
}

module.exports = router;

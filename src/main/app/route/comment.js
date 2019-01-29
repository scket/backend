'use strict';
/**
 * コメント投稿エントリポイント
 */

const express = require('express');
const router = express.Router();
const CommentRequestBody = require('../entity/commentRequestBody');
const CommentService = require('../../domain/service/commentService');

router.post('/',function(req,res){
  const commentRequestBody = new CommentRequestBody(req.body.threadId, req.body.userName, req.body.comment);
  const commentService = new CommentService(commentRequestBody);
  sendResponse(commentService, res);
});

async function sendResponse(commentService, res) {
  res.json(await commentService.run())
}

module.exports = router;

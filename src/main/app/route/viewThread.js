'use strict'
/**
 * 案件詳細参照エントリポイント
 */

const express = require('express');
const router = express.Router();
const ViewThreadService = require('../../domain/service/viewThreadService');

router.get('/',function(req,res){
  const id = req.query.id;
  const viewThreadService = new ViewThreadService(id);
  sendResponse(viewThreadService, res);
});

async function sendResponse(viewThreadService, res) {
  res.json(await viewThreadService.run())
}

module.exports = router;

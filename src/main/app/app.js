'use strict';
/**
 * アプリケーション本体
 */
 
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const router = require('./route/index.js');
app.use('/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);

var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
require('dotenv').config();



//接続情報設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


router.get('/',async(req, res, next) => {
//データベースコレクションを指定
const database = client.db('test');
const notes = database.collection('test');

//idが1のドキュメントを検索
const query = {id : 1};
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;
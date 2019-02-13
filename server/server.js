'use strict';

var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();

var SELECT_ALL_LINKS_QUERY = 'SELECT * FROM [your_table]';
var connection = mysql.createConnection({
  host: '[your_host]',
  user: '[your_username]',
  password: '[your_passwd]',
  database: '[your_db]'
});

connection.connect(function (err) {
  if (err) {
    return err;
  }
});

app.use(cors());

app.get('/', function (req, res) {
  connection.query(SELECT_ALL_LINKS_QUERY, function (err, results) {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/add', function (req, res) {
  var _req$query = req.query,
    name = _req$query.name,
    desc_text = _req$query.desc_text,
    url = _req$query.url,
    label = _req$query.label;

  var INSERT_LINKS_QUERY = 'INSERT INTO [your_table] (name,desc_text,url,label) VALUES(\'' + name + '\',\'' + desc_text + '\', \'' + url + '\', \'' + label + '\')';
  connection.query(INSERT_LINKS_QUERY, function (err, results) {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Link eklendi");
    }
  });
});

app.get('/delete', function (req, res) {
  var _req$query = req.query,
    id = _req$query.id;

  var DELETE_LINKS_QUERY = 'DELETE FROM [your_table] WHERE id =' + id ;
  connection.query(DELETE_LINKS_QUERY, function (err, results) {
    if (err) {
      return res.send(err);
    } else {
      return res.send("Link Kaldırıldı");
    }
  });
});

var port = 5000;

app.listen(port, function () {
  return 'Server running on port ' + port;
});
var express = require('express');
var app = express();

var Mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'aplication/json'}));

app.use(bodyParser.urlencoded({extended: true}));

var con = Mysql.createConnection({
  host: 'sman1margaasih.sch.id',
  user: 'sman1margaasih_edit-siswa',
  password: 'bilqimlb@gmail.com',
  database: 'sman1margaasih_siswa-edit',
});

var server = app.listen(4545, function () {
  var host = server.address().address;
  var host = server.address().port;
});

con.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('connected');
  }
});

app.get('/users', function (req, res) {
  con.query('select * from users', function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log(rows);
      res.send(rows)
    }
  });
});

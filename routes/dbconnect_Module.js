var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
var dbcon = require('./routes/utils/dbcon');

router.use(bodyParser.json());

const dbConnectionInfo = dbcon.getDBConnectionInfo();
const connection = mysql.createConnection(dbConnectionInfo);

const mysql = require('mysql2')
const db = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
}).promise();


module.exports = db
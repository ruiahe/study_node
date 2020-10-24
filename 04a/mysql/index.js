(async () => {
  const mysql = require('mysql2/promise')
  // 链接数据库
  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kaikeba'
  }
  const connection = await mysql.createConnection(cfg)
  let ret = await connection.execute(`CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id)
  )`)
  ret = await connection.execute(`INSERT INTO test(message) VALUE(?)`, ['BBB'])
  const [rows, fields] = await connection.execute(`SELECT * FROM test`)
  console.log('select', rows)
  console.log('fields', fields)
})()
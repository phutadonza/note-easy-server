import mysql from 'mysql'

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
})

connection.connect((err) => {
  if (err) {
    console.log('MySQL connection failed:', err)
    process.exit(1) // หยุดการทำงานของโปรแกรมเมื่อเชื่อมต่อล้มเหลว
  }
  console.log('MySQL connected!')
})

export { connection }

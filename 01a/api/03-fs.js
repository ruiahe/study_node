const fs = require('fs')

// 同步调用
const data = fs.readFileSync('./download.js')
console.log(data.toString())

// 异步调用
fs.readFile('./download.js', (err, data) => {
    if (err) throw err
    console.log(data.toString())
})
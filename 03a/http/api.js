const http = require('http')
const fs = require('fs')
const app = http.createServer((req, res) => {
  const {method, url} = req
  if (method === 'GET' && url === '/') {
    fs.readFile('./index.html', (err, data) => {
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    })
  } else if (method === 'GET' &&  url === '/api/users') {
    // res.setHeader('Access-Control-Allow-Credentials', true)
    // res.setHeader('Set-Cookire', 'cookie1=va123123123123123121')
    res.setHeader('Content-Type', 'application/json')
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.end(JSON.stringify([{name: '盒子'}]))
  } else if (method === 'OPTIONS' && url === '/api/users') {
    // res.setHeader('Access-Control-Allow-Credentials', true)
    // res.writeHead(200, {
    //   "Access-Control-Allow-Origin": "http://localhost:3000",
    //   "Access-Control-Allow-Headers": "X-Token, Content-Type",
    //   "Access-Control-Allow-Methods": "PUT"
    // })
    res.end()
  } else if (method === 'POST' && url === '/api/save') {
    let reqData = []
    let size = 0
    req.on('data', data => {
      console.log('>>>req on', data)
      reqData.push(data)
      size += data.length
    }) // 取出req流
    req.on('end', function () {
      console.log('end')
      const data = Buffer.concat(reqData, size)
      console.log('data', size, data.toString())
      res.end(`formdata:${data.toString()}`)
    })
  }
})
// app.listen(3000)
module.exports = app
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {  // 创建一个服务
    const {url, method, headers} = req
    if(url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'})
                res.end('500 服务器错误')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if (url === '/users' && method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({'name': '盒子~哈哈哈~'}))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('.' + url).pipe(res)
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end('404：页面没找到')
    }
})
server.listen('8989')
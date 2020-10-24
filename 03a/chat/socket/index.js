const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendFile(__dirname +'/index.html')
})

io.on('connection', function(socket) {
  console.log('connection......')
  socket.on('chat message', function(msg){
    console.log('chat message' + msg)
    // 广播
    io.emit('chat message', msg)
  })
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
})
http.listen(3000, () => [
  console.log('app listen 3000 ')
])
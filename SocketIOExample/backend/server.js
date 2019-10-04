const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(8080);

let count = 0
let activeColor = '#f1f1f1'

io.on('connection', socket => {
  console.log('new user')

  count++

  socket.emit('changeColor', activeColor)
  io.emit('newUser', count)

  socket.on('changeColor', color => {
    activeColor = color
    socket.broadcast.emit('changeColor')
  })

  socket.on('disconnect', () => {
    count--
    io.emit('disUser', count)
    console.log('user disconnected')
  })
})
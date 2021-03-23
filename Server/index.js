const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origins: ['http://localhost:10000']
    }
});
var cors = require('cors')

app.use(cors())

io.on('connection',socket => {
    socket.on('message', messageData => {
        io.emit('message', messageData)
    })
})

http.listen(10000, function() {
    console.log('listening on port 10000')
})
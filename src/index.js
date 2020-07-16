
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);



io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        socket.broadcast.emit('chat', { text: msg.text, username: msg.username });
    });
});

http.listen(3000);
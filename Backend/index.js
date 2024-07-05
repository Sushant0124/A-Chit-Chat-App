const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', username => {
        users[socket.id] = username;
        console.log("Received a name:", username);
        socket.broadcast.emit('user-joined', username);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect',msg=>{
        socket.broadcast.emit('left',  users[socket.id]);
        delete users[socket.id];
    });
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
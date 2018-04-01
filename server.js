/**
 * Created by bhavyaagg on 01/04/18.
 */

const express = require('express');
const app = express();

const http = require('http')
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('play', (data) => {
    socket.emit('play', data);
  })
})

app.use(express.static(__dirname + '/public'));

server.listen(2222, () => {
  console.log("Server Started on port 2222");
})
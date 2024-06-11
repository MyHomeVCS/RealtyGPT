require('dotenv').config();

const express = require("express");
const http = require( "http");
const socketio = require("socket.io");
const {onMessage} = require("./socketListeners");
const {findByParams} = require("./services/database");

const app = express();

app.get("/", (_req, res) => {
  res.send({ uptime: process.uptime() });
});

const server = http.createServer(app);

const io = new socketio.Server(server, {
  cors: {
    origin: "*"
  }
});


io.on('connection', async (socket) => {
  console.log('a user connected', socket.data.user);
  await findByParams()


  socket.on('message', async (text) => {
    onMessage(socket, text)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});


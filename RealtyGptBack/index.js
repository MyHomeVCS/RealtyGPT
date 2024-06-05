require('dotenv').config();

const express = require("express");
const http = require( "http");
const socketio = require("socket.io");
const {getParamsFromUserTextPrompt} = require("./services/gptServices");

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


io.on('connection', (socket) => {
  console.log('a user connected', socket.data.user);


  socket.on('message', async (text) => {
    console.log('params', text);
    const result = await getParamsFromUserTextPrompt(text);

    console.log('getParamsFromUserTextPrompt', result)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});


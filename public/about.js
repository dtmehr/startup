const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Broadcast received message to all clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(8080, () => {
    console.log('Server started on port 8080');
});
const socket = new WebSocket('ws://localhost:8080');

const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message);
        messageInput.value = '';
    }
});

socket.addEventListener('message', (event) => {
    const message = event.data;
    const messageElement = document.createElement('li');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
});

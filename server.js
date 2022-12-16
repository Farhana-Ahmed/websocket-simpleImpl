// const http = require('http');
// const websocket = require('ws')
// const server = http.createServer((req, res) => {
//     res.end('connected');
//     console.log('server connetion established')
// })

// const wsServer = new websocket.Server({server})
// wsServer.on('headers',(headers,req) => {
//     console.log(headers)
// })
// server.listen(8000);
const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end("I am connected");
    console.log('http conection observed')
});
const wss = new websocket.Server({ server });
wss.on('headers', (headers, req) => {
    // console.log(headers);
});

wss.on('connection', (ws, req) => {
    ws.send('This is a message from server, connection is established');
    ws.on('message', (msg) => {
        console.log(msg);
    });
});

server.listen(8000)
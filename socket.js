const net = require('net');
const handleConnection = require('./handleCon');

const server = net.createServer(handleConnection);

server.listen(4001, '127.0.0.1');
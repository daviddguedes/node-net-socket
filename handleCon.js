const net = require('net');

const subscribers = [];
setInterval(() => {
    subscribers.map( client => {
        client.write(`${new Date()}`);
    });
}, 3000);

module.exports = socket => {
    subscribers.push(socket);
    subscribers.map( client => {
        client.write(`Um cliente se conectou`);
    });

    socket.on('connect', () => {
        console.log('conectou');
    });

    socket.on('end', () => {
        const res = subscribers.splice(subscribers.indexOf(socket), 1);
    });

    socket.on('data', (data) => {
        const body = JSON.parse(data.toString());
        socket.write(`O cliente ${body.token} se conectou`);
    });
}
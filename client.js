const net = require('net');

const clientId = Math.floor(Math.random() * 1000);

const credentials = {
    username: 'daviddguedes',
    token: clientId 
}

const client = new net.Socket();
client.connect(4001, '127.0.0.1', () => {
    client.write(JSON.stringify(credentials));
});

client.on('data', (data) => {
    console.log(data.toString());
});
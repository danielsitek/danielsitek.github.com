var connect = require('connect');
var os = require('os');

var serverPort = 3000;

connect.createServer(
    connect.static(__dirname + '/public')
).listen(serverPort);

var interfaces = os.networkInterfaces();
var addresses = [];
for (k in interfaces) {
    for (k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family == 'IPv4' && !address.internal) {
            addresses.push(address.address)
        }
    }
}

console.log('Server is running on ' + addresses.toString() + ':' + serverPort);
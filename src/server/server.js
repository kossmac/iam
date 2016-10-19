var jsonfile = require('jsonfile');
var watch = require('node-watch');
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

var datafile = 'data.json';
var globws;

obj = jsonfile.readFile(datafile, function (err, obj) {
    console.dir(obj)
});

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message)
    });

    globws = ws;
    ws.send(obj)
});


var watcher = watch('./');

watcher.on('change', function(file) {
    console.log(file + ' changed.')
    if (globws) {
        globws.send(obj)
    }
});
var express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Deployer is working!');
});
app.listen(3000, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log('server is listening on 3000');
});

// var http = require('http');
// var server = http.createServer(function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    var message = 'It works!\n',
//        version = 'NodeJS ' + process.versions.node + '\n',
//        response = [message, version].join('\n');
//    res.end(response);
// });
// server.listen();

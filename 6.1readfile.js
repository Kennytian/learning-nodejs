var http = require('http');
var optionFile = require('./optionfile');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== '/favicon.ico') {
        optionFile.readFileSync('./login.html');
        response.end('OK');
        console.log('Main thread done')
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');
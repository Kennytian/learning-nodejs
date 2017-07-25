var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.icn'){
        var pathName = url.parse(request.url).pathname;
        pathName = pathName.replace(/\//,'');
        response.end(pathName);
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== '/favicon.ico') { //拦截一次favicon请求
        console.log("访问");
        response.end("Hello 中文");
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');

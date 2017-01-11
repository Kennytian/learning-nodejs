var http = require('http');
var exportFun = require('./2.2exportfuns');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        // fun1(response);

        exportFun.fun2(response);
        exportFun['fun3'](response); //字符串调用对应函数写法

        response.end('');
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');

//page function
function fun1(res) {
    console.log('fun1');
    res.write('你好，i am fun1');
}


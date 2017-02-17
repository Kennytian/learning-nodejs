var http = require('http');
var User = require('./user');
var Teacher = require('./teacher');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url !== '/favicon.ico') {
        var user = new User(1, 'Jerry', 3);
        user.enter();

        var teacher = new Teacher(2, 'Kenny', 33);
        teacher.enter();
        teacher.teach(response);

        response.end('已显示');
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');
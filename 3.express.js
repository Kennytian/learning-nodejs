var express = require('express');

var app = express();

app.get('/', function (req, resp) {
	resp.send('Hello 中文！');
});

var server = app.listen(8083, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
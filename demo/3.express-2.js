var express = require('express');

var app = express();

app.get('/', function (req, resp) {
	console.log('主页 GET 请求');
	resp.send('你好 GET 请求');
});

app.post('/', function (req, resp) {
	console.log("主页 POST 请求");
	resp.send('你好 POST 请求');
});

app.get('/del_user', function (req, resp) {
	console.log("/del_user 响应 DELETE 请求");
	resp.send('删除页面');
});

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, resp) {
	console.log("/list_user GET 请求");
	resp.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, resp) {
	console.log("/ab*cd GET 请求");
	resp.send('正则匹配');
});

var server = app.listen(8084, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址 http://%s:%s', host, port);
})


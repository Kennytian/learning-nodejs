var fs = require('fs');

var data = fs.readFileSync('LICENSE');
console.log(data.toString());

console.log("阻塞代码实例执行结束！\n\n");

fs.readFile('README.md', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log(data.toString());
});

console.log("非阻塞代码实例执行结束！\n\n");


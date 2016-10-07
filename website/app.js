var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'EJS');
app.listen(port);

console.log('website started on port %s', port);

//index page
app.get('/',function (req,res) {
	res.render('index',{
		title:"我是首页",
		content:"我是首页内容"
	})
});

//list page
app.get('/views/list',function (req,res) {
	res.render('list',{
		title:"我是列表页",
		content:"我是列表页内容"
	})
});

//detail page
app.get('/views/detail',function (req,res) {
	res.render('detail',{
		title:"我是详情页",
		content:"我是详情页内容"
	})
});
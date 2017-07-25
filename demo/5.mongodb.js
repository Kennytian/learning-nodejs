/*
 * db.users.insert({"user10": {"name": "Kenny", "password": "password3", "profession": "clerk", "id": 10}})
 * db.users.insert({"user11": {"name": "React", "password": "password11", "profession": "clerk", "id": 11}})
 * */


var mongodb = require('mongodb');

var server = new mongodb.Server('localhost', 27017, {auto_reconnect: true});
var db = new mongodb.Db('test', server, {safe: true});

db.open(function (err, db) {
	if (!err) {
		db.collection('users', {safe: true}, function (err, collection) {
			var index = 10;
			collection.find(function (error, cursor) {
				cursor.each(function (error, item) {
					if (item) {
						 console.log(item);
					}
				});
			});
		});
	}
});

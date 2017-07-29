let redis = require('redis');

// 端口和密码在 /usr/local/etc/redis.conf 里修改
let options = {host: '127.0.0.1', port: 8085, password: 'a22222'};

// 更多设置 https://github.com/NodeRedis/node_redis#options-object-properties
let client = redis.createClient(options);

client.on('error', err => console.log(`redis error${err}`));

// 在 db0 里写插入一条记录，键为：string key，值为：string value
client.set('我是string key', 'string value', redis.print);

// 像用 table 一样记录数据，键为：hash test 1，值为：some value
client.hset('hashkey_1', 'hashkey1_1', '一些值', redis.print);
client.hset(["hashkey_1", "hashkey1_2", "一些其它值"], redis.print);

// 数据全部放一个数组里当参数传入,'表'名为key, 两列三行数据
client.hmset(['key', '键1', '值1', '键2', '值2', '键3', '值3'], (err, res) => {
});

//'表'名key放第一个参数，数据放在数组里放第二个参数，两列两行数据
client.hmset("key", ["键21", "值21", "键22", "值22"], function (err, res) {
});

// '表'名key和数据
client.hmset("key", "键31", "值31", "键32", "值32", function (err, res) {
});

client.hkeys("hashkey_1", function (err, replies) {
  console.log(replies.length + " replies:");
  replies.forEach(function (reply, i) {
    console.log("    " + i + ": " + reply);
  });
  client.quit();
});

client.get("missingkey", function (err, reply) {
  // reply is null when the key is missing
  console.log('查询一个不存在key:missingkey, 返回：',reply);
});

// key10s 这条数据会在10秒后删除
client.set('key10s', 'value!', 'EX', 10);

client.hgetall('key', (err, obj) => {
  console.log(obj);
});
client.hgetall('hashkey_1', (err, obj) => {
  console.dir(obj);
});








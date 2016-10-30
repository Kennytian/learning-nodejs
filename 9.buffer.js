var buf1 = new Buffer(10);

var buf2 = new Buffer([10, 20, 30, 40, 50]);

var buf3 = new Buffer("www.zhulux.com", "utf-8");

console.log(buf1.toString('ascii'));
console.log(buf2.toString('ascii'));
console.log(buf3.toString());

var buffer = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buffer[i] = i + 97;
}

console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii', 0, 5));
console.log(buffer.toString('utf-8', 0, 10));
console.log(buffer.toString(undefined, 0, 20));

console.log(buf3.toJSON());

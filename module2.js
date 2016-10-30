let  util = require('util');

let  A =  "A different value a";
let  B = "B different value b";

let m1 = require('./module1');

let result = util.inspect(m1.values());

console.log(result);
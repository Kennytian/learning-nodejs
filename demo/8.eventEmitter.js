var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
  console.log('监听器 listener1 执行');
};

var listener2 = function listener2() {
  console.log('监听器 listener2 执行');
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenerCount, '个监听器连接事件');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再被监听');

eventEmitter.emit('connection');

eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenerCount, '个监听器连接事件。');

console.log('程序执行完毕');
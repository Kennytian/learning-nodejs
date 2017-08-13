// 安全模式类 version 1
// var Demo = function () {};
// Demo.prototype = {
//   show: function () {
//     console.log('成功获取！');
//   }
// };
// var d = new Demo();
// d.show();
// var d = Demo();
// d.show();

// 安全模式类 version 2
// var Demo = function () {
//   if (!(this instanceof Demo)) {
//     return new Demo();
//   }
// };
// Demo.prototype = {
//   show: function () {
//     console.log('成功获取！');
//   }
// };
// var d = Demo();
// d.show();

// 安全的工厂方法
var Factory = function (type, content) {
  if (this instanceof Factory) {
    return new this[type](content);
  } else {
    return new Factory(type, content);
  }
};

Factory.prototype = {
  Java: function (content) {
    this.content = content;
    (function (content) {
      var div = {innerHTML: content + ' Java', color: 'yellow', background: 'red'};
      console.log(div);
    })(content)
  },
  PHP: function (content) {
    this.content = content;
    (function (content) {
      var div = {innerHTML: content + ' PHP', color: 'yellow', background: 'red'};
      console.log(div);
    })(content)
  },
  JavaScript: function (content) {
    this.content = content;
    (function (content) {
      var div = {innerHTML: content + ' JavaScript', color: 'yellow', background: 'red'};
      console.log(div);
    })(content)
  },
  UI: function (content) {
    this.content = content + ' UI';
    (function (content) {
      var div = {innerHTML: content + ' UI', color: 'yellow', background: 'red', style: 'freestyle'};
      console.log(div);
    })(content)
  }
};

var data = [
  {type: 'PHP', content: '你好'},
  {type: 'Java', content: '你好'},
  {type: 'JavaScript', content: '你好'},
  {type: 'UI', content: '你好'}
  // ,{type: 'javascript', content: '你好'}
];

for (var i = 0; i < data.length; i++) {
  Factory(data[i].type, data[i].content);
}

// 注意：有个小缺陷，type的值必须与Factory.prototype里的方法大小一致

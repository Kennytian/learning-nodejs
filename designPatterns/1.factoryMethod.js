var Java = function (content) {
  this.content = content;
  (function (content) {
    var div = {
      innerHTML: content + ' Java',
      color: 'yellow',
      background: 'red'
    };
    console.log(div);
  })(content)
};

var Php = function (content) {
  this.content = content;
  (function (content) {
    var div = {
      innerHTML: content + ' PHP',
      color: 'yellow',
      background: 'red'
    };
    console.log(div);
  })(content)
};

var JavaScript = function (content) {
  this.content = content;
  (function (content) {
    var div = {
      innerHTML: content + ' JavaScript',
      color: 'yellow',
      background: 'red'
    };
    console.log(div);
  })(content)
};

function JobFactory(type, content) {
  switch (type) {
    case 'java':
      return new Java(content);
      break;
    case 'php':
      return new Php(content);
      break;
    case 'JavaScript':
      return new JavaScript(content);
      break;
  }
}

JobFactory('php', '你好');

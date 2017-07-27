### webpack 第四课

#### 1 package.json
> `yarn add lodash`

> `yarn add webpack --dev`

```
"scripts": {
    "lesson4": "./node_modules/.bin/webpack --config ./webpack/lesson4/webpack.config.js"
}
```

#### 2 ./dist/index.html
```html
<html>
<head>
    <title>Output Management</title>
    <meta charset="utf-8">
    <script src="./print.bundle.js"></script>
</head>
<body>
<script src="./app.bundle.js"></script>
</body>
</html>
```

#### 3 ./src/index.js
```js
import _ from 'lodash';
import printMe from './print';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = '点击按钮去控制台查看';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
```

#### 4 ./src/print.js
```js
export default function printMe() {
  console.log('print.js 调用我')
}
```

#### 5 ./webpack.config.js
```js
let path = require('path');

const cfg = {
  entry: {
    app: './webpack/lesson4/src/index.js',
    print: './webpack/lesson4/src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;
```

#### 运行命令
> yarn run lesson4

就会看到如下效果：
```
yarn run v0.27.5
$ ./node_modules/.bin/webpack --config ./webpack/lesson4/webpack.config.js
Hash: 74be7ba129837fc8e284
Version: webpack 3.3.0
Time: 455ms
          Asset     Size  Chunks                    Chunk Names
  app.bundle.js   545 kB    0, 1  [emitted]  [big]  app
print.bundle.js  2.72 kB       1  [emitted]         print
   [0] ./webpack/lesson4/src/print.js 67 bytes {0} {1} [built]
   [1] ./webpack/lesson4/src/index.js 377 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Done in 1.08s.
```
### webpack 第七课

#### 1 package.json
> `yarn add lodash`

> `yarn add webpack html-webpack-plugin clean-webpack-plugin --dev`

```
"scripts": {
    "lesson7": "webpack --progress --profile --colors --config ./webpack/lesson7/webpack.config.js"
}
```

#### 2 ./dist/index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Production</title>
  </head>
  <body>
  <script type="text/javascript" src="app.bundle.js"></script><script type="text/javascript" src="print.bundle.js"></script></body>
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

`webpack3` 通过设置 `ModuleConcatenationPlugin` 这个新特性将一些有联系的模块，放到一个闭包函数里面去，通过减少闭包函数数量从而加快 `JS` 代码的执行速度

_注：该特性是基于 `ES Module` 的，对于 `Common.js` 和 `AMD` 的模块不适用_

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cfg = {
  entry: {
    app: './webpack/lesson7/src/index.js',
    print: './webpack/lesson7/src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;
```

#### 运行命令
> yarn run lesson7

就会看到如下效果：
```
yarn run v0.27.5
$ ./node_modules/.bin/webpack --config ./webpack/lesson7/webpack.config.js
clean-webpack-plugin: /Users/kenny/projects/webpack/lesson7/dist has been removed.
Hash: 825a32ac26cbcd3046b3
Version: webpack 3.4.1
Time: 825ms
          Asset       Size  Chunks                    Chunk Names
  app.bundle.js     545 kB    0, 1  [emitted]  [big]  app
print.bundle.js    2.72 kB       1  [emitted]         print
     index.html  257 bytes          [emitted]         
   [0] ./webpack/lesson7/src/print.js 67 bytes {0} {1} [built]
   [1] ./webpack/lesson7/src/index.js 377 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Child html-webpack-plugin for "index.html":
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
Done in 1.88s.
```
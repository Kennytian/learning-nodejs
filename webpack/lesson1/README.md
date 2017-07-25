### webpack 第一课

##### package.json
> `yarn add lodash`

> `yarn add webpack --dev`

```
"scripts": {
    "lesson1": "./node_modules/.bin/webpack --config ./webpack/lesson1/webpack.config.js"
}
```

##### ./dist/index.html
```html
<html>
<head>
    <title>Getting Started</title>
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>
```

##### ./src/index.js
```js
import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
```

##### ./webpack.config.js
```js
const path = require('path');

const cfg = {
  entry: './webpack/lesson1/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = cfg;
```

##### 运行命令
> yarn run lesson1

就会看到如下效果：
```
yarn run v0.27.5
$ ./node_modules/.bin/webpack --config ./webpack/lesson1/webpack.config.js
Hash: 7f2b0f8cc19806045916
Version: webpack 3.3.0
Time: 453ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./webpack/lesson1/src/index.js 212 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
Done in 1.07s.
```
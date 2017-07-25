### webpack 第二课

##### package.json
> `yarn add style-loader css-loader --dev`

```
"scripts": {
    "lesson1": "./node_modules/.bin/webpack --config ./webpack/lesson2/webpack.config.js"
}
```

##### ./dist/index.html
```html
<html>
<head>
    <title>Asset Management</title>
</head>
<body>
<script src="./bundle.js"></script>
</body>
</html>
```

##### ./src/index.js
```js
import _ from 'lodash';
import './style.css';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
```

##### ./src/style.css
```css
.hello {
    color: red;
}
```

##### ./webpack.config.js
```js
let path = require('path');

const cfg = {
  entry: './webpack/lesson2/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
};

module.exports = cfg;
```

##### 运行命令
> yarn run lesson2

就会看到如下效果：
```
yarn run v0.27.5
$ ./node_modules/.bin/webpack --config ./webpack/lesson2/webpack.config.js
Hash: 526136c8030429a5a5b5
Version: webpack 3.3.0
Time: 815ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  560 kB       0  [emitted]  [big]  main
   [0] ./webpack/lesson2/src/index.js 268 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
   [4] ./webpack/lesson2/src/style.css 1.02 kB {0} [built]
   [5] ./node_modules/css-loader!./webpack/lesson2/src/style.css 197 bytes {0} [built]
    + 4 hidden modules
Done in 1.43s.
```
### webpack 第三课

#### 1 package.json
> `yarn add lodash`

> `yarn add webpack style-loader css-loader file-loader csv-loader xml-loader --dev`

```
"scripts": {
    "lesson3": "./node_modules/.bin/webpack --config ./webpack/lesson3/webpack.config.js"
}
```

#### 2 ./dist/index.html
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

#### 3 ./src/data.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Mary</to>
  <from>John</from>
  <heading>Reminder</heading>
  <body>Call Cindy on Tuesday</body>
</note>
```

#### 4 ./src/index.js
```js
import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  let icon = new Image();
  icon.src = Icon;
  element.appendChild(icon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
```

#### 5 ./src/style.css
> 注：在 `Mac` 电脑上试了 `oft`、`ttf`，能打包成功，但网页无法显示相应字体，最后试 `woff` 页面才生效
```css
  @font-face {
    font-family: 'MyFont';
    src:  url('./Serendity-Script.woff2') format('woff2'),
          url('./Serendity-Script.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
.hello {
    color: red;
    font-family: 'MyFont';
    background: url('./icon.svg');
}
```

#### 6 ./webpack.config.js
```js
let path = require('path');

const cfg = {
  entry: './webpack/lesson3/src/index.js',
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
    }, {
      test: /\.(gif|jpg|png|svg)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(csv|tsv)$/,
      use: [
        'csv-loader'
      ]
    }, {
      test: /\.xml$/,
      use: [
        'xml-loader'
      ]
    }]
  }
};

module.exports = cfg;
```

#### 运行命令
> yarn run lesson3

就会看到如下效果：
```
yarn run v0.27.5
$ ./node_modules/.bin/webpack --config ./webpack/lesson3/webpack.config.js
Hash: 524f0f29aa0a35828ee7
Version: webpack 3.3.0
Time: 921ms
                                 Asset     Size  Chunks                    Chunk Names
  cd0bb358c45b584743d8ce4991777c42.svg  2.38 kB          [emitted]         
916d691c52c2e851e1cb7385f62b54b8.woff2  26.1 kB          [emitted]         
 7f30d9a7072b207ff9fa04db4a94ba0c.woff  29.8 kB          [emitted]         
                             bundle.js   561 kB       0  [emitted]  [big]  main
   [0] ./webpack/lesson3/src/icon.svg 82 bytes {0} [built]
   [1] ./webpack/lesson3/src/index.js 429 bytes {0} [built]
   [3] (webpack)/buildin/global.js 509 bytes {0} [built]
   [4] (webpack)/buildin/module.js 517 bytes {0} [built]
   [5] ./webpack/lesson3/src/style.css 1.02 kB {0} [built]
   [6] ./node_modules/css-loader!./webpack/lesson3/src/style.css 525 bytes {0} [built]
   [8] ./webpack/lesson3/src/Serendity-Script.woff2 84 bytes {0} [built]
   [9] ./webpack/lesson3/src/Serendity-Script.woff 83 bytes {0} [built]
  [12] ./webpack/lesson3/src/data.xml 113 bytes {0} [built]
    + 4 hidden modules
Done in 1.70s.
```
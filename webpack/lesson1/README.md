#### webpack 第一课

##### package.json
> `yarn add lodash`

> `yarn add webpack --dev`

```json
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
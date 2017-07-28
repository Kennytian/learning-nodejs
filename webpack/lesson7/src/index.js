// 我是 index 注释

import _ from 'lodash';
import printMe from './print';

function component() {
  const ele = document.createElement('div');
  const btn = document.createElement('button');

  ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 点击按钮去控制台查看
  btn.innerHTML = '点击按钮去控制台查看';
  btn.onclick = printMe;

  ele.appendChild(btn);

  return ele;
}

document.body.appendChild(component());
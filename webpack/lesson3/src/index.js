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
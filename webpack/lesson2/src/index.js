import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.classList.add('hello');

  let icon = new Image();
  icon.src = Icon;
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());
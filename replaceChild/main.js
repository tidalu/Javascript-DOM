// Your JavaScript code goes here
const list = document.getElementById('list');
const css = list.children[1];

const newItem = document.createElement('li');
newItem.textContent = 'jQuery';

list.replaceChild(newItem, css);

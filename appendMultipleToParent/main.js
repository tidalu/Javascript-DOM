// Your JavaScript code goes here

function create(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}

function append(parent, children) {
  children.forEach((x) => {
    parent.appendChild(x);
  });
}

const list = document.getElementById('my-list');
console.log(list);

var items = [
  create('Dom'),
  create('Dom1'),
  create('Dom11'),
  create('Dom111'),
  create('Dom1111'),
];

append(list, items);

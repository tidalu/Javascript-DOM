// Your JavaScript code goes here

// document.createElement(tagName)

let newElement = document.createElement('input');
console.dir(newElement); // <input></input>

document.body.appendChild(newElement);

// syntax
// createElement(tagname, options)

function addElem(length) {
  const newElem = document.createElement('div');
  const ulElem = document.createElement('ul');
  for (let i = 1; i <= length; i++) {
    let li = document.createElement('li');
    li.textContent = `${i}`;
    ulElem.appendChild(li);
  }
  newElem.appendChild(ulElem);
  document.body.appendChild(newElem);
}

addElem(10);

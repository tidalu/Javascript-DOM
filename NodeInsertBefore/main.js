// Your JavaScript code goes here

const myList = document.getElementById('myList');
// it takes two Elements , one is an elemnt to insert before it, second el is the actual element to insert ,

const pearsitem = document.getElementById('pearsitem');

console.log(myList);
console.log(pearsitem);

const oranges = document.createElement('li');
oranges.textContent = 'oranges';

function addTobeginning(parent, toinsert) {
  const firstCh = parent.firstChild;
  parent.insertBefore(toinsert, firstCh);
}

addTobeginning(myList, oranges);

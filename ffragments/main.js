// Your JavaScript code goes here

/**
 *
 * Document fragment :
 *  <h1>Title</h2>
 *  <span?>some text  here</span?
 */

const myList = document.getElementById('myList');
const docfreg = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Apples';
item2.textContent = 'Bananas';

docfreg.appendChild(item1);
docfreg.appendChild(item2);

myList?.appendChild(docfreg);

console.log(docfreg); /// it is empty now, cuz after appending the fragment we will have nothing left , all the chilrens of the fragment are moved to appended parent

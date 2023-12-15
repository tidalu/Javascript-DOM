// Your JavaScript code goes here

const myDiv = document.getElementById('myDiv');

myDiv.dataset.name = 'bob';
myDiv.dataset.startedCodingAt = 18;
myDiv.dataset.name = '';

myDiv.removeAttribute('data-name');
console.log(myDiv?.dataset);

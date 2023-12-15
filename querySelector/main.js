// Your JavaScript code goes here
// it returns the first matching element
const containe2 = document.querySelector('.container2');
const container2Box = containe2.querySelector('.box');
const result = document.querySelector('.box');
// console.log(result);

// querySelectorAll()

const list = document.querySelectorAll('.collect');
console.log(list); // we could use the return value as an array , butt it si on the console a nodelist

list.forEach((x) => {
  x.style.color = 'white';
  x.style.background = 'black';
});

// Your JavaScript code goes here

// this prop is useful for user interfacec

const applesItem = document.querySelector('#myList > li:first-of-type');
const bananasItem = applesItem?.nextElementSibling;
console.log(bananasItem);

const nav = document.querySelector('nav');
const belowNav = nav?.nextElementSibling;

belowNav.style.marginTop = nav?.clientHeight + 'px';

// the difference between nextSibling and nextElementSibling is next element is actually gives the next node and the nextElementSibling

// what did  i mean with node is , next elment is to take anything after the item , like it should not be an html elemen, it can be jsut plain text , so nextElementSibling is to take the next elemtn not the node

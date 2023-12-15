// Your JavaScript code goes here

// nodeClone allows to aka copy of another node
const mt = document.getElementById('mylist');

const listChildern = mt?.children;
console.log(listChildern);

const bananas = listChildern[1];
console.log(bananas);

const bananasCopy = bananas.cloneNode(true);
// if we give true as a param , it means clone all the childrens also, otherwise,it does it only for the first layer

mt?.appendChild(bananasCopy);

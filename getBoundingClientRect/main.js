// Your JavaScript code goes here

// this method getBoundingClientRect() method does not take any args , and returns  the information about the size of an element and its position to the viewport

// /  like left, right, bottom, top, x,y,width, height properties,

const box = document.querySelector('div.box');

window.addEventListener('scroll', () => {
  if (box.getBoundingClientRect().top < window.innerHeight) {
    box.style.background = 'red';
  }
});
/*
DOMRect {x: 8, y: 66.8125, width: 100, height: 100, top: 66.8125, …}
bottom
: 
166.8125
height
: 
100
left
: 
8
right
: 
108
top
: 
66.8125
width
: 
100
x
: 
8
y
: 
66.8125
[[Prototype]]
: 
DOMRect

*/

// bottom is calculated from teh top of the window to the bottom of the rect, height is actual height, left is the space between the left sided and window , rigth is al so same from right , top is from top to the top of the rect, width is withd , x is from left ot the window, left is from top to the shape

// it includes if we ad border also ,

// Your JavaScript code goes here

// multiple nodes or elements at once
// supports combination of test, text nodes, elements,
// works in modern browsers(IE nees a polyfill)

const div = document.getElementById('div');

const strong = document.createElement('strong');
const em = document.createElement('em');
const textNode = document.createTextNode(' data okay man');

strong.textContent = 'Strong';
em.textContent = ' emphasized';

div.append(strong, em, textNode, ' more text');

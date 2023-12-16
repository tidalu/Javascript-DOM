// Your JavaScript code goes here

// replaceWith() method
//  reaplce a node with another node

const p = document.querySelector('#example p');

const newEl = document.createElement('input');
newEl.value = 'I amm new';

const btn = document.createElement('button');
btn.textContent = 'me too';
btn.addEventListener('click', () => {
  newEl.value = '';
});
// p.replaceWith(newEl, btn, '   and i am somsa');

const strong = document.createElement('strong');
strong.textContent = ' strong ';
p.childNodes[0].replaceWith(strong, ' Iam somsa');

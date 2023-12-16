// afterbegin beforebegin afterend beforeend

const area = document.querySelector('.area');
const box = document.createElement('div');
box.id = 'box';

area.insertAdjacentElement('afterend', box);

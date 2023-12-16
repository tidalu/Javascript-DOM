// Your JavaScript code goes here
const list = document.getElementById('list');
function colorGen() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
list.addEventListener('click', (a) => {
  const target = a.target;
  if (target.matches('li')) {
    var color = colorGen();
    var color2 = colorGen();
    // target.textContent += ' checked';
    target.style.background = color;
    target.style.color = color2;
  }
});

const newEl = document.createElement('li');
newEl.textContent = 'alif';
list?.appendChild(newEl);

// Your JavaScript code goes here

const myM = document.getElementById('myList');

const list = ['banan', 'orange', 'mango', 'lemon'];
for (const fr of list) {
  let li = document.createElement('li');
  li.textContent = fr;
  myM?.appendChild(li);
}

// append method after this line

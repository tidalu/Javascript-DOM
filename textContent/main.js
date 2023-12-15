// Your JavaScript code goes here

const h2Title = document.getElementById('title');

alert(h2Title?.textContent);

// h2Title.textContent = 'mangoes and bananas';

// innerHTMl -> we can actually put html inside of this , difference is this

h2Title.textContent = '<em> mangoes </em>';
// h2Title.innerHTML = '<em> mangoes </em>';

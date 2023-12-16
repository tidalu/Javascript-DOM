// Your JavaScript code goes here
const para = document.getElementById('myPara');
const col = document.querySelector('.col');
/**
 * beforebegin - before element
 * afterbegin - first child
 * beforeend - last child
 * afterend - after element
 */
// para.insertAdjacentHTML('afterbegin', ' <strong>alif</strong> '); // takes 2 ars, first position, second value

const em = document.querySelector('em');
let count = false;
function color1() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
em.addEventListener('click', () => {
  if (!count) {
    para.insertAdjacentHTML('afterbegin', '<strong>alif</strong>');
    count = true;
  } else {
    var color = color1();
    var color2 = color1();
    let el1 = document.createElement('div');
    el1.style.width = '100px';
    el1.style.height = '100px';
    el1.style.background = color;
    let el2 = document.createElement('div');
    el2.style.width = '100px';
    el2.style.background = color2;

    col.appendChild(el1);
    col.appendChild(el2);
    console.log(color);
    para.style.color = color;
    para.style.background = color2;
  }
});

// diffrecence between innerHTML is insertAdjacentHTMl is almost the same, but when we use innerHTML it deletes all teh child events or such like that, but inserAdjacentHTMl does not do that,

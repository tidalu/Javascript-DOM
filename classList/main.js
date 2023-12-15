// Your JavaScript code goes here
const mypara = document.getElementById('myPara');
mypara?.classList.add('bold', 'big-font');

mypara?.classList.remove('bold');

mypara?.classList.replace('big-font', 'red-bg');

mypara?.classList.toggle('red-bg');
mypara?.classList.toggle('red-bg');

mypara?.classList.contains('white-text')
  ? mypara.classList.add('white-text')
  : mypara?.classList.remove('white-text');

console.log(mypara?.classList);

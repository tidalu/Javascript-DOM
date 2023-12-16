// Your JavaScript code goes here

//  closest()

document.querySelectorAll('button')?.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element.closest('tr')); // we can pas class also id maybe
  });
});

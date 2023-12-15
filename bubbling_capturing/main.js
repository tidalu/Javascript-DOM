// Your JavaScript code goes here
const baba = document.getElementById('parent');
const child = document.getElementById('child');

baba?.addEventListener('click', () => {
  console.log('I am a parent');
});

child?.addEventListener('click', () => {
  console.log('I am a child');
});

// bubbling means we start with the innermost child towards to parent element, so  in above when child is clicked first child then parent functions will be triggered

// but in capturing it is opposite, it goes from outer scope to inner first parent towards parent

// to convert  bubbling to capturing we should add true as an third argument of parent function by default it is false, while it is false it means bubbling is active if we set true it means capturing is active

baba?.addEventListener(
  'click',
  () => {
    console.log('I am a parent');
  },
  true
);

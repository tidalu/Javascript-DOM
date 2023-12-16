// Your JavaScript code goes here
const list = document.getElementById('list');

// Function to generate a random color
function colorGen() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Mousemove event listener for the list
list.addEventListener('mousemove', (event) => {
  const mouseY = event.clientY;
  const listTop = list.getBoundingClientRect().top;
  const listItemHeight = list.querySelector('li').offsetHeight;

  // Calculate the index of the list item to change colors based on mouseY position
  const index = Math.floor((mouseY - listTop) / listItemHeight);

  // Get the list items
  const listItems = list.querySelectorAll('li');

  // Change colors for the specific list item
  listItems.forEach((item, i) => {
    if (i === index) {
      var color = colorGen();
      var color2 = colorGen();
      item.style.background = color;
      item.style.color = color2;
    }
  });
});

// Create a new list item with text content 'alif'
const newEl = document.createElement('li');
newEl.textContent = 'alif';

// Append the new list item to the list
list?.appendChild(newEl);

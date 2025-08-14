// Select element by ID
const heading = document.getElementById('heading');
console.log("Heading:", heading.textContent);

// Select elements by class name
const items = document.getElementsByClassName('item');
console.log("List Items (by class):", items);

// Select elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log("Paragraphs:", paragraphs);

// Select first match using querySelector
const firstParagraph = document.querySelector('p');
console.log("First paragraph using querySelector:", firstParagraph.textContent);

// Select all matches using querySelectorAll
const allItems = document.querySelectorAll('.item');
allItems.forEach((item, index) => {
  console.log(`Item ${index + 1} using querySelectorAll:`, item.textContent);
});

// Add event listener to button
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  alert("Button Clicked!");
});

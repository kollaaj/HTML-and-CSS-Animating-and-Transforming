// get html classes from local storage for dark/light mode
const htmlClasses = localStorage.getItem('htmlClasses');
if (htmlClasses) {
  const htmlElement = document.querySelector('html');
  htmlElement.className = htmlClasses;
}

// event that fires when dark/light button is clicked
document.querySelector('#darklight-toggle').addEventListener('click', () => {
  // get html element
  const htmlElement = document.querySelector('html');
  
  // toggle dark and light mode
  htmlElement.classList.toggle('light');
  htmlElement.classList.toggle('dark');

  // save selected dark/light mode to local storage
  const htmlClasses = htmlElement.classList.toString();
  localStorage.setItem('htmlClasses', htmlClasses);
});

// taken without shame (cuz pretty) from coding class. 
// Only changes are size and number of stars
function generateRandomColor() {
  const availableColors = [
  'pink',
  'white',
  'yellow',
  'orange',
  'lightblue'
  ];
  
  // Get number from 0 to 4
  const index = Math.round( Math.random() * (availableColors.length - 1) )
        
  return availableColors[index]
}

function getRandomColors() {
  const color1 = generateRandomColor();
  const color2 = generateRandomColor();
  return [color1, color2];
}

function addStar() {
  // Create span (star) element
  const star = document.createElement('stars');
  
  // Define star position on screen
  const top = Math.round(Math.random() * window.innerHeight);
  const left = Math.round(Math.random() * window.innerWidth);
  star.style.top = top + 'px';
  star.style.left = left + 'px';
  
  // Define star radius
  const radius = Math.round(Math.random() * 10 + 2);
  star.style.width = radius + 'px';
    star.style.height = radius + 'px';
  
  // Define twinkle delay
  star.style.animationDelay = Math.random() * 5 + 's';
  
  
  // Add it to body
  document.body.appendChild(star);
  
  // Get an array of random colors (2)
  const starColors = getRandomColors();
  
  // Change color every few secs
  setInterval(() => {
      // Get current color
      const bgColor = star.style.backgroundColor;
      if (bgColor === starColors[0]) {
        star.style.backgroundColor = starColors[1];
      } else {
        star.style.backgroundColor = starColors[0];
      }
  }, 3000)
}

for (let i = 0; i < 200; i++) {
  addStar();
}
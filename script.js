const button = document.getElementById('yesButton');

button.addEventListener('click', () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random positions within the window boundaries
  const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

  // Move the button to the new position
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});
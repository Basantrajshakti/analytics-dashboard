const toggleButton = document.querySelector('.toggle-button');
const backDrop = document.querySelector('.backdrop');
const mainNav = document.querySelector('.main-nav');

toggleButton.addEventListener('click', () => {
  if (mainNav.style.display === 'none') {
    mainNav.style.display = 'block';
    backDrop.style.display = 'block';
  }
  else {
    backDrop.style.display = 'none';
    mainNav.style.display = 'none';
  }
})

backDrop.addEventListener('click', () => {
  backDrop.style.display = 'none';
  mainNav.style.display = 'none';
})
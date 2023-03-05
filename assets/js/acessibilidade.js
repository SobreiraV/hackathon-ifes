const fontSizeIncreaseButton = document.getElementById('font-size-increase');
const fontSizeDecreaseButton = document.getElementById('font-size-decrease');
const fontSizeResetButton = document.getElementById('font-size-reset');

let fontSize = localStorage.getItem('fontSize') || 16;
document.body.style.fontSize = `${fontSize}px`;

fontSizeIncreaseButton.addEventListener('click', () => {
  fontSize += 2;
  document.body.style.fontSize = `${fontSize}px`;
  localStorage.setItem('fontSize', fontSize);
});

fontSizeDecreaseButton.addEventListener('click', () => {
  fontSize -= 2;
  document.body.style.fontSize = `${fontSize}px`;
  localStorage.setItem('fontSize', fontSize);
});

fontSizeResetButton.addEventListener('click', () => {
  fontSize = 16;
  document.body.style.fontSize = `${fontSize}px`;
  localStorage.removeItem('fontSize');
});
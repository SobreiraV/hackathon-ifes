const contrastIncreaseButton = document.getElementById('contrast-increase');
const contrastDecreaseButton = document.getElementById('contrast-decrease');
const contrastResetButton = document.getElementById('contrast-reset');

let contrast = localStorage.getItem('contrast') || 100;
document.body.style.filter = `brightness(${contrast}%)`;

contrastIncreaseButton.addEventListener('click', () => {
    contrast += 10;
    document.body.style.filter = `brightness(${contrast}%)`;
    localStorage.setItem('contrast', contrast);
});

contrastDecreaseButton.addEventListener('click', () => {
    contrast -= 10;
    document.body.style.filter = `brightness(${contrast}%)`;
    localStorage.setItem('contrast', contrast);
});

contrastResetButton.addEventListener('click', () => {
    contrast = 100;
    document.body.style.filter = `brightness(${contrast}%)`;
    localStorage.removeItem('contrast');
});

const fontChangerBtn = document.getElementById('font-changer');
let fontToggle = false;
let currentFont = localStorage.getItem('font');

if (currentFont) {
    applyFont(currentFont);
}

fontChangerBtn.addEventListener('click', function () {
    if (fontToggle) {
        applyFont('Open Sans');
    } else {
        applyFont('OpenDyslexic');
    }
    fontToggle = !fontToggle;
});

function applyFont(font) {
    const elements = document.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
        if (font === 'Open Sans') {
            elements[i].classList.remove('alt-font');
        } else {
            elements[i].classList.add('alt-font');
        }
        elements[i].style.fontFamily = font;
    }
    localStorage.setItem('font', font);
}
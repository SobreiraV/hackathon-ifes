const fontChangerBtn = document.getElementById('font-changer');
let fontToggle = false;

fontChangerBtn.addEventListener('click', function () {
    const elements = document.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
        if (fontToggle) {
            elements[i].classList.remove('alt-font');
        } else {
            elements[i].classList.add('alt-font');
        }
    }
    fontToggle = !fontToggle;
});
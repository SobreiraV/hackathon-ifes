window.addEventListener('load', function () {
    const jumpingArrow = document.getElementById('jumping-arrow');
    let position = 0;
    let direction = 1;
    setInterval(function () {
        position += direction;
        jumpingArrow.style.top = position + 'px';
        if (position >= 5 || position <= -5) {
            direction *= -1;
        }
    }, 50);
});
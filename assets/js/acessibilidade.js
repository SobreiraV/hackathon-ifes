 // Função para aumentar e diminuir o tamanho da fonte
 const fontSizeIncreaseButton = document.getElementById('font-size-increase');
 const fontSizeDecreaseButton = document.getElementById('font-size-decrease');

 let fontSize = 16;
 fontSizeIncreaseButton.addEventListener('click', () => {
   fontSize += 2;
   document.body.style.fontSize = `${fontSize}px`;
 });

 fontSizeDecreaseButton.addEventListener('click', () => {
   fontSize -= 2;
   document.body.style.fontSize = `${fontSize}px`;
 });
// Selecionando todos os elementos com a classe 'destaque'
const destaqueElems = document.querySelectorAll('.destaque');

// Objeto com as mensagens correspondentes a cada número em destaque
const mensagens = {
    '10': 'Introdução à programação web: Nesta aula, você aprenderá os conceitos básicos da programação web, como HTML, CSS e JavaScript.',
    '15': 'Programação orientada a objetos em Java: Aprenda a programar com Java, uma das linguagens de programação mais populares do mundo.',
    '20': 'Desenvolvimento de jogos em Unity: Aprenda a desenvolver jogos em Unity, uma das plataformas de desenvolvimento de jogos mais populares do mundo.',
    // Adicione quantos números e mensagens desejar
};

// Iterando sobre cada elemento selecionado
destaqueElems.forEach(elem => {
    // Adicionando um listener de evento para quando o mouse passar sobre o elemento
    elem.addEventListener('mouseover', () => {
        // Obtendo o número em destaque
        const diaDestaque = elem.innerHTML;
        const mesAno = document.querySelector('.month h2').innerHTML;

        // Obtendo a mensagem correspondente ao número em destaque
        const mensagem = mensagens[diaDestaque] || `Evento em ${diaDestaque} de ${mesAno}: Nesta aula, você aprenderá os conceitos básicos da programação web, como HTML, CSS e JavaScript.`;

        // Exibindo a mensagem em um alerta
        alert(mensagem);
    });
});

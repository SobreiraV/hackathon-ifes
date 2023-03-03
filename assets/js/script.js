const menuOpen = document.getElementById('hamburger_menu-open');

menuOpen.addEventListener('click', () => {
    const asideMenu = document.createElement('aside');
    const menuButton = document.createElement('div');
    const menuLogo = document.createElement('img');
    const navMenu = document.createElement('nav');
    const ulList = document.createElement('ul');

    asideMenu.classList.add('aside-menu');
    menuLogo.classList.add('aside-menu-logo');
    menuButton.classList.add('material-symbols-outlined', 'hamburguer_menu-button', 'unselectable');
    menuButton.setAttribute('id', 'hamburger_menu-close');
    
    menuButton.textContent = 'close';

    asideMenu.appendChild(menuButton);
    asideMenu.appendChild(menuLogo);
    asideMenu.appendChild(navMenu);
    navMenu.appendChild(ulList);

    menuLogo.setAttribute('src', '/assets/img/logo-reprogramese/preferencial-horizontal.png');
    menuLogo.setAttribute('alt', 'Logo Reprograme-se');

    const navLinks = [
        { text: 'Início', href: '#' },
        { text: 'O Programa', href: '#' },
        { text: 'Como funciona', href: '#' },
        { text: 'Inscrição', href: '#' },
        { text: 'Contato', href: '#' }
    ];

    navLinks.forEach(navLink => {
        const liItem = document.createElement('li');
        const aItem = document.createElement('a');
        aItem.textContent = navLink.text;
        aItem.setAttribute('href', navLink.href);
        liItem.appendChild(aItem);
        ulList.appendChild(liItem);
    });

    document.body.appendChild(asideMenu);

    menuButton.addEventListener('click', () => {
        asideMenu.remove();
    });
});
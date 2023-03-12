const menuOpen = document.getElementById('hamburger_menu-open');

menuOpen.addEventListener('click', () => {
    const blurBackground = document.createElement('div');
    const asideMenu = document.createElement('aside');
    const menuButton = document.createElement('div');
    const menuLogo = document.createElement('img');
    const navMenu = document.createElement('nav');
    const ulList = document.createElement('ul');
    const linkedinIcon = document.createElement('img');
    const instagramIcon = document.createElement('img');
    const youtubeIcon = document.createElement('img');
    const linkedinLink = document.createElement('a');
    const instagramLink = document.createElement('a');
    const youtubeLink = document.createElement('a');

    blurBackground.classList.add('blur-background');
    asideMenu.classList.add('aside-menu');
    menuLogo.classList.add('aside-menu-logo');
    menuButton.classList.add('material-symbols-outlined', 'hamburguer_menu-button', 'unselectable');
    menuButton.setAttribute('id', 'hamburger_menu-close');
    linkedinIcon.classList.add('aside-social-icon');
    instagramIcon.classList.add('aside-social-icon');
    youtubeIcon.classList.add('aside-social-icon');
    
    menuButton.textContent = 'close';

    document.body.appendChild(blurBackground);
    asideMenu.appendChild(menuButton);
    asideMenu.appendChild(menuLogo);
    asideMenu.appendChild(navMenu);
    navMenu.appendChild(ulList);
    asideMenu.appendChild(linkedinLink);
    asideMenu.appendChild(instagramLink);
    asideMenu.appendChild(youtubeLink);
    linkedinLink.appendChild(linkedinIcon);
    instagramLink.appendChild(instagramIcon);
    youtubeLink.appendChild(youtubeIcon);

    menuLogo.setAttribute('src', './assets/img/logo-reprogramese/preferencial-horizontal.png');
    menuLogo.setAttribute('alt', 'Logo Reprograme-se');

    linkedinIcon.setAttribute('src', './assets/img/icon-social/linkedin.png');
    instagramIcon.setAttribute('src', './assets/img/icon-social/instagram.png');
    youtubeIcon.setAttribute('src', './assets/img/icon-social/youtube.png');

    linkedinLink.setAttribute('href', '#');
    instagramLink.setAttribute('href', '#');
    youtubeLink.setAttribute('href', '#');

    const navLinks = [
        { text: 'Início', href: '#home' },
        { text: 'O Programa', href: '#programa' },
        { text: 'Como funciona', href: '#funciona' },
        { text: 'Inscrição', href: '#inscricao' },
        { text: 'Notícias', href: '#news' },
        { text: 'Agenda', href: './assets/pages/agenda.html' },
        { text: 'Dúvidas', href: './assets/pages/faq.html' },
        { text: 'Fale conosco', href: '#contact' },
        { text: 'Parceiros', href: '#partners' }
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
        blurBackground.remove();
    });
});
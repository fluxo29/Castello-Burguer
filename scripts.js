let botao = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav-list');

botao.addEventListener('click', function() {
    
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
let links = document.querySelectorAll('.nav-list a');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
        navList.classList.remove('active');
    }
});
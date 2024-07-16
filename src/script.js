const mainNav = document.getElementById('main-nav');
const openedNavClass = 'left-[-180px]';

document.getElementById('main-nav-toggle').addEventListener('click', () => {

    mainNav.classList.toggle(openedNavClass);

});

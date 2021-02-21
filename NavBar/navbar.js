/* Make the menu appear and disappear when the user click on the
    button using the class "opened" from the #menu */

const hamburger = document.querySelector('#action');
     // menuOpened  = document.querySelector('#menu.opened');
     menuClose = document.querySelector('#menu');

    hamburger.addEventListener('click', () => {
    // document.querySelector('#menu').classList.add('opened');
    // document.querySelector('#menu').classList.remove('close');
        document.querySelector('#menu').classList.toggle('opened');
    document.body.style.overflow = 'hidden';

});

    menuClose.addEventListener('click', () => {
        // document.querySelector('#menu').classList.add('close');
        // document.querySelector('#menu').classList.remove('opened');
        document.querySelector('#menu').classList.toggle('opened');
        document.body.style.overflow = '';
    });


// opened.addEventListener('click', () => {
//     menu.classList.remove('active');
// });



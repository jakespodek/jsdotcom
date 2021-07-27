console.log('%c Hire me!', 'color: #40FF40; font-weight: bold; font-size: 16px');

const hamburger = document.getElementById('hamburger');
const bigX = document.getElementById('bigX');
const navList = document.getElementById('navList');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const wideScreen = window.matchMedia("(min-width: 666px)");

const checkNav = () => {
    if (navList.classList.contains('mobileNavShow')) {
        header.style.height = "60vh";
        nav.style.height = "60vh";
        bigX.style.display = "block";
        hamburger.style.display = "none";
    } else {
        header.style.height = "6rem"
        nav.style.height = "initial";
        bigX.style.display = "none";
        hamburger.style.display = "block";
    };
};

hamburger.addEventListener('click', () => {
    navList.classList.add('mobileNavShow');
    checkNav();
});

bigX.addEventListener('click', () => {
    navList.classList.remove('mobileNavShow');
    checkNav();
})

const closeMobileNav = (wideScreen) => {
    // if screen width is greater than 666px, close mobile nav
    if (wideScreen.matches) {
        navList.classList.remove('mobileNavShow');
        checkNav();
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}

wideScreen.addEventListener("change", () => {
    closeMobileNav(wideScreen);
})
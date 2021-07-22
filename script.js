const app = {};

app.mobileNav = () => {
    document.getElementById("mobileNavButton").addEventListener("click", () => {
        console.log('button!');
    });
}

app.init = () => {
    console.log('%c Hire me!', 'color: #40FF40; font-weight: bold; font-size: 16px');
    app.mobileNav();
};

app.init();


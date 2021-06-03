const app = {};

app.SelectForm = () => {
    document.querySelector("form").addEventListener("submit", app.handleSubmit);
}

app.handleSubmit = (event) => {
    event.preventDefault();
    const button = document.querySelector("button");
    button.innerHTML = "Sent!";
    button.style.backgroundColor('salmon');
    button.style.color('black');
};

app.init = () => {
    console.log('Hire me!');
    app.SelectForm();
}
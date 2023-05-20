let counter = 0;
const valor = document.querySelector('#valor');
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");

btnIncrease.onclick = () => {
    counter++;
    valor.textContent = counter;
};

btnDecrease.onclick = () => {
    if (counter > 0) {
        counter--;
        valor.textContent = counter;
    }
};

btnReset.onclick = () => {
    counter = 0;
    valor.textContent = counter;
};
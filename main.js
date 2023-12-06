//main.js

document.entrada.addEventListener('submit', leFormulario);

const olJoao = document.querySelector("#oljoao");
const olMaria = document.querySelector("#olMaria")

function leFormulario(event) {
    event.preventDefault();
    const fruta = document.entrada.fruta.value;
    const quantidade = document.entrada.quantidade.value;

    console.log(`fruta: ${fruta} quantidade: ${quantidade}` );
    document.entrada.submit();
}
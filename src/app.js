import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['Mi perro', 'La abuela', 'El vecino', 'Mi primo', 'El gato', 'La vecina'];
let action = ['se comió', 'tiró', 'rompió', 'perdió', 'mordió', 'se comió'];
let what = ['el control remoto', 'mi teléfono', 'mi computadora', 'la comida que dejé preparada', 'los zapatos nuevos', 'el cargador del celular'];
let when = ['antes de que llegara', 'cuando estaba trabajando', 'cuando fui al mercado', 'cuando me fui a dormir', 'cuando salí corriendo a la tienda', 'mientras miraba televisión'];


function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

document.getElementById('generador').addEventListener("click", function () {
  document.getElementById("excuse").innerText = generateExcuse();
})

window.onload = function() {
    document.getElementById('excuse').innerText = generateExcuse();
};


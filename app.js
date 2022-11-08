import { Tablero } from "./Tablero.js";

const matriz = [
    ["R","😎","O"],
    ["😎","X","😎"],
    ["😎","😎","😎"]
]


const tableroObjecto = new Tablero();

tableroObjecto.generarTablero(matriz);

/*PRACTICA */


/* document.querySelector("#contenedor-matriz").innerHTML = ` 
    <div class="row">
        <div class="col casilla otra-clase">
            <button type="button" class="btn btn-primary boton-casilla">😎</button>
        </div>
    </div>
`;
 */
/* let matrizHtml = "";

for (let i = 0; i < matriz.length; i++) {
    matrizHtml += `
        <div class="row" id="fila-${i}">
    `;
    for (let j = 0; j < matriz[i].length; j++) {
        matrizHtml += `
            <div class="col casilla otra-clase" id="col-${j}">
                <button onclick=alerta(this) id="btn-${i}-${j}" type="button" class="btn btn-primary boton-casilla">${matriz[i][j]}</button>
            </div>
        `;
    }
    matrizHtml += `</div>`;
}
document.querySelector("#contenedor-matriz").innerHTML = matrizHtml;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log( document.querySelector(`#btn-${i}-${j}`).innerHTML);
    }
} */


//quiero mostrar el contenido de la casilla
/* function alerta(boton){
    console.log(boton.innerHTML);
    alert("PRESIONASTE " + boton.innerHTML);
}
 */

/* let i = 0;
let j = 0;
matriz.forEach(fila => {
    matrizHtml += `
        <div class="row" id="fila${}">
        </div>
    `;
});
 */

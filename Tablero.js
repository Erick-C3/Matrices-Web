class Tablero{

    /**
     * Usando la matriz recibida genera un tablero
     * @param {Array <Array>} matrizTablero para generar tablero
     */
    generarTablero(matrizTablero = ["Tablero vacio"]){
        document.querySelector("#contenedor-matriz").innerHTML = this.#generarFilas(matrizTablero);
        this.#agregarFuncionalidadABtn(matrizTablero);
    }

    /**
     * Genera las filas para la matriz
     * @param {Array <Array>} matrizTablero para generar las fila
     * @returns la matriz generada con html
     */
    #generarFilas(matrizTablero) {
        let matrizHtml = "";
        for (let i = 0; i < matrizTablero.length; i++) {
            matrizHtml += `
                <div class="row" id="fila-${i}">
            `;
            matrizHtml += this.generarColumnas(matrizTablero, i);
            matrizHtml += `</div>`;
        }
        return matrizHtml;
    }

    /**
     * Genera las columnas necesarias para la fila actual
     * @param {Array <Array>} matrizTablero para generar las columnas 
     * @param {Number} i el indice de la fila actual
     * @returns el html de la calumna para la fila actual
     */
    generarColumnas(matrizTablero, i) {
        let columnaHtml = ``;
        for (let j = 0; j < matrizTablero[i].length; j++) {
            columnaHtml += `
                    <div class="col casilla otra-clase" id="col-${j}">
                        <button id="btn-${i}-${j}" type="button" class="btn btn-primary boton-casilla">${matrizTablero[i][j]}</button>
                    </div>
                `;
        }
        return columnaHtml;
    }

    /**
     * Agrega funcionalidades a los botones
     * @param {Array <Array>} matrizGuia para iterar los botones de la matriz en la app
     */
    #agregarFuncionalidadABtn(matrizGuia){
        for (let i = 0; i < matrizGuia.length; i++) {
            for (let j = 0; j < matrizGuia[i].length; j++) {
                document.querySelector(`#btn-${i}-${j}`).onclick = ()=>{
                    this.#alerta(document.querySelector(`#btn-${i}-${j}`));
                };
            }            
        }
    }

    /**
     * funcionalidad para el boton actuual
     * @param {HTMLButtonElement} boton actual
     */
    #alerta(boton){
        console.log(boton.innerHTML);
        alert("PRESIONASTE " + boton.innerHTML);
    }

}

export {Tablero};
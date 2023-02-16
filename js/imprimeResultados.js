const resultado = document.querySelector('.resultado');

cargarEventListeners();

function cargarEventListeners(){
    formulario.addEventListener('submit', imprimeResultados);

}

function imprimeResultados(e){
    e.preventDefault();
    let salida = document.createElement('div')
    salida.innerHTML = "los limites son x1 = 0 y x2 = 0.9301";

    resultado.appendChild(salida);
}
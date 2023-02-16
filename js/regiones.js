const formulario = document.querySelector('form');
const resultado = document.querySelector('.resultado');

let divisionEcuacion = [];
let ecuacionRemplazadaminimo = [];
let ecuacionRemplazadamaximo = [];

//Variables
let limiteMaximo = '';
let limiteMinimo = '';
let ecuacion = '';
let n = 1000
let h
let area = 0
let areaTotal = 0

//Cargar eventos
cargarEventListeners();

function cargarEventListeners(){
    formulario.addEventListener('submit', capturarFormulario);
}

function capturarFormulario(e){
    e.preventDefault()
        data = Object.fromEntries(
            new FormData(e.target)
        )
        // console.table(data)
        limiteMinimo = parseFloat(data.inferior);
        limiteMaximo = data.maximo;
        ecuacion = data.ecuacion;
        calcularAlturaTrapecios(limiteMaximo, limiteMinimo)
        cicloAreas()
        limpiarMemoria();
        

}
function calcularAlturaTrapecios(LS, LI){
    return h = ((LS - LI) / n)
}

function cicloAreas(){
    for(let i = 0 ; i <= 0; i++){
        sustituirValorenyi();
        //console.log("Area " + areaTotal)
    }
    
    // console.log(areaTotal);
    
    
}
function sustituirValorenyi(){
    divisionEcuacion = ecuacion.split(" ")
    
    
    let yi = remplazarXminimo(divisionEcuacion)
    //console.log("yi => " + yi)
    
    //console.log("xi => " + limiteMinimo)
    limiteMinimo = parseFloat(limiteMinimo) + h;
    //console.log("xf => " + limiteMinimo)
    let yf =remplazarXmaximo(divisionEcuacion, limiteMinimo)
    //console.log("yf => " + yf)



    area = (((yf + yi)/2) * h)
    areaTotal += area


    return areaTotal
}
function remplazarXminimo(ecuacion){
    let sumatoria = 0
    let arrRemplazoConjunto = [];
    ecuacion.map( e => {
        let remplazo = e.replace("x", limiteMinimo).split("(");
        arrRemplazoConjunto.push(remplazo)
        let arrRemplazo = []
        let arrRemplazoUnion = []
        let arrUnion = []
        

        for(let i = 0; i < arrRemplazoConjunto.length; i++){
            arrRemplazoConjunto[i].map( e => {
                let quitar = e.split(")^");
    
                arrRemplazo.push(quitar);
            })
        }
        
        for(let i = 0; i < arrRemplazo.length; i+=2) {
            arrRemplazoUnion = arrRemplazo[i].concat(arrRemplazo[i+1])
            arrUnion.push(arrRemplazoUnion)
        }
        
        
        ecuacionRemplazadaminimo = arrUnion
        
    })
    console.log( ecuacionRemplazadaminimo);

    for(let i= 0; i < ecuacionRemplazadaminimo.length; i++) {
        //Separamos funciones trigonometricas de la constante
        if(ecuacionRemplazadaminimo[i][0][1] == ["s", "a", "c", "t"]){
            console.log("Filtracion con exito")
        }

        sumatoria += calcularX(ecuacionRemplazadaminimo[i][0], ecuacionRemplazadaminimo[i][1], ecuacionRemplazadaminimo[i][2])
    }

    return sumatoria

}
function remplazarXmaximo(ecuacion, siguienteLimite){
    let sumatoria = 0
    let arrRemplazoConjunto = [];
    ecuacion.map( e => {
        let remplazo = e.replace("x", siguienteLimite).split("(");
        arrRemplazoConjunto.push(remplazo)
        let arrRemplazo = []
        let arrRemplazoUnion = []
        let arrUnion = []
        // console.log("conjunto => " + arrRemplazoConjunto);

        for(let i = 0; i < arrRemplazoConjunto.length; i++){
            arrRemplazoConjunto[i].map( e => {
                let quitar = e.split(")^");
    
                arrRemplazo.push(quitar);
            })
        }
        for(let i = 0; i < arrRemplazo.length; i+=2) {
            arrRemplazoUnion = arrRemplazo[i].concat(arrRemplazo[i+1])
            arrUnion.push(arrRemplazoUnion)
        }
        
        ecuacionRemplazadaminimo = arrUnion
        
    })

    console.log(ecuacionRemplazadaminimo)


    for(let i= 0; i < ecuacionRemplazadaminimo.length; i++) {
        //Separamos funciones trigonometricas de la constante
        

        sumatoria += calcularX(ecuacionRemplazadaminimo[i][0], ecuacionRemplazadaminimo[i][1], ecuacionRemplazadaminimo[i][2])
    }

    return sumatoria

}

function calcularX(constante, literal, potencia){

    let exponente = Math.pow(literal, potencia)
    let resultado = exponente * constante

    return resultado
}
function limpiarMemoria(){
    divisionEcuacion = [];
    ecuacionRemplazadaminimo = [];
    ecuacionRemplazadamaximo = [];

    //Variables
    limiteMaximo = '';
    limiteMinimo = '';
    ecuacion = '';
    n = 1000
    h
    area = 0
    areaTotal = 0
}
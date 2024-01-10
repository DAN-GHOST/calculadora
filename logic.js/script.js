//funciones del programa.
function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function dividir(a,b){
    if(b === 0) return "error";
    return a/b;
}

function multiplicar(a,b){
    return a*b;
}

function getNumeroAndSimbolo(event){
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
}

function resultadoFinal(valorString){
    let arr = valorString.split('');
    let simbolo =[],
    arr_numbers = [],
    arr_numbers_end =[];
    if(valorString.length === 0 || valorString[0] === '.'){
        return 'error';
    }else{
        for(let i = 0; i < arr.length; i++){
            if((arr[i] === '+' || arr[i] === '-' || arr[i] === 'x' || arr[i] === '/') && arr[i+1] === '.'){
                return 'error';
            }
        }
        for(let i = 0; i < arr.length; i++){
            if(i === 0 && arr[i] === '-'){
                arr_numbers.push(arr[i]);
            }else if(arr[i] === '+' || arr[i] === '-' || arr[i] === 'x' || arr[i] === '/'){
                simbolo.push(arr[i]);
                arr_numbers_end.push(+(arr_numbers.join('')));
                arr_numbers = [];
            }else{
                arr_numbers.push(arr[i]);
                if(i === arr.length-1){
                    arr_numbers_end.push(+(arr_numbers.join('')));
                    arr_numbers = [];
                }
            }
        }
    }
    return resultado(simbolo, arr_numbers_end);
}

function resultado(simbolo, arr_numbers_end){
    let getNumberOne = null,
    getNumberTwo = null;
    for(let i= 0; i < simbolo.length; i++){
        if(i === 0){
            getNumberOne = arr_numbers_end[i];
            getNumberTwo = arr_numbers_end[i+1]
        }else{
            getNumberTwo = arr_numbers_end[i+1]
        }
        switch(simbolo[i]){
            case '+':
                getNumberOne = sumar(getNumberOne,getNumberTwo);
                console.log("Esta es la suma",getNumberOne);
                break;
            case '-':
                getNumberOne = restar(getNumberOne,getNumberTwo);
                console.log("Esta es la resta",getNumberOne);
                break;
            case 'x':
                getNumberOne = multiplicar(getNumberOne,getNumberTwo);
                console.log("Esta es la multiplicacion",getNumberOne);
                break;
            case '/':
                getNumberOne = dividir(getNumberOne,getNumberTwo);
                console.log("Esta es la dividir",getNumberOne);
                break;
        }
    }
    return getNumberOne;
}

//etiquetas en dode se agrega y presenta la información.
let txtEtiquetaP = document.querySelector('.txtMostrarSelecionesAOperar');
let btnMostrarSolucion = document.querySelector('.txtMostrarSolucion');

//botonoes con los numeros.
let btnNumero_0 = document.querySelector('.numero_0');
btnNumero_0.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_1 = document.querySelector('.numero_1');
btnNumero_1.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_2 = document.querySelector('.numero_2');
btnNumero_2.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_3 = document.querySelector('.numero_3');
btnNumero_3.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_4 = document.querySelector('.numero_4');
btnNumero_4.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_5 = document.querySelector('.numero_5');
btnNumero_5.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_6 = document.querySelector('.numero_6');
btnNumero_6.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_7 = document.querySelector('.numero_7');
btnNumero_7.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_8 = document.querySelector('.numero_8');
btnNumero_8.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnNumero_9 = document.querySelector('.numero_9');
btnNumero_9.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});

// botonoes con los simbolos para operar.
let btnPunto = document.querySelector('.punto');
btnPunto.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnDividir = document.querySelector('.dividir');
btnDividir.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnMultiplicar = document.querySelector('.multiplicar');
btnMultiplicar.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnRestar = document.querySelector('.restar');
btnRestar.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});
let btnSumar = document.querySelector('.sumar');
btnSumar.addEventListener('click',(event)=>{getNumeroAndSimbolo(event)});

//botones para limpiar la pantalla de operaciones y resultado.
let btnlimpiarTodo = document.querySelector('.boton_c_borra_todo');
btnlimpiarTodo.addEventListener('click',(event)=>{
    if(event.target.value !== undefined){
        txtEtiquetaP.textContent = '';
    }
});
let btnlimpiarSoloUno = document.querySelector('.boton_x_borra_un_elemento');
btnlimpiarSoloUno.addEventListener('click',(event)=>{
    if(event.target.value !== undefined && txtEtiquetaP.textContent.length > 0){
        txtEtiquetaP.textContent = txtEtiquetaP.textContent.substring(0, txtEtiquetaP.textContent.length - 1);
    }
});

let btnIgual =  document.querySelector('.igual');
btnIgual.addEventListener('click',()=>{
    btnMostrarSolucion.textContent = resultadoFinal(txtEtiquetaP.textContent).toString();
});
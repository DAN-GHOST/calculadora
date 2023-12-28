function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function dividir(a,b){
    return a/b;
}

function multiplicar(a,b){
    return a*b;
}

//etiquetas en dode se agrega y presenta la información.
let txtEtiquetaP = document.querySelector('.txtMostrarSelecionesAOperar');

//botonoes con los numeros
let btnNumero_0 = document.querySelector('.numero_0');
btnNumero_0.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_1 = document.querySelector('.numero_1');
btnNumero_1.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_2 = document.querySelector('.numero_2');
btnNumero_2.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_3 = document.querySelector('.numero_3');
btnNumero_3.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_4 = document.querySelector('.numero_4');
btnNumero_4.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_5 = document.querySelector('.numero_5');
btnNumero_5.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_6 = document.querySelector('.numero_6');
btnNumero_6.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_7 = document.querySelector('.numero_7');
btnNumero_7.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_8 = document.querySelector('.numero_8');
btnNumero_8.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnNumero_9 = document.querySelector('.numero_9');
btnNumero_9.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});

// botonoes con los simbolos para operar
let btnPunto = document.querySelector('.punto');
btnPunto.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnDividir = document.querySelector('.dividir');
btnDividir.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnMultiplicar = document.querySelector('.multiplicar');
btnMultiplicar.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnRestar = document.querySelector('.restar');
btnRestar.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});
let btnSumar = document.querySelector('.sumar');
btnSumar.addEventListener('click',(event)=>{
    if(!(event.target.value === undefined) && txtEtiquetaP.textContent === ''){
        txtEtiquetaP.textContent = event.target.value;
    }else if(event.target.value !== undefined){
        txtEtiquetaP.textContent += event.target.value;
    }
});

//botones para limpiar la pantalla de operaciones y resultado
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
/*
let operacion = prompt("Por favor, ingresa la operación que quieres realizar. +, -, x, /");
let arr = operacion.split('');

let simbolo = null;
let arr_number_one = [];
let arr_number_two = [];
let getNumberOne = null;
let getNumbertwo = null;

for(let i= 0; i < arr.length; i++){
    if(arr[i] === ' '){
        arr.splice(i,1);
        --i;
    }
}

for(let i= 0; i < arr.length; i++){
    if(arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/'){
        simbolo = arr[i];
    }else{
        if(simbolo === null){
            arr_number_one.push(arr[i]);
        }else{
            arr_number_two.push(arr[i]);
        }
    }

}

getNumberOne = +(arr_number_one.join(''));
getNumbertwo = +(arr_number_two.join(''));

switch(simbolo){
    case '+':
        alert(sumar(getNumberOne,getNumbertwo));
    break;

    case '-':
        alert(restar(getNumberOne,getNumbertwo));
    break;

    case '*':
        alert(multiplicar(getNumberOne,getNumbertwo));
    break;

    case '/':
        alert(dividir(getNumberOne,getNumbertwo));
    break;
}
*/
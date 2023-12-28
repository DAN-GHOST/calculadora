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
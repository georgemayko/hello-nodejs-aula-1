
function soma(a,b){
  return a + b;
}

function subtrair(a,b){
  return a - b;
}

function multiplicar(a,b){
  return a * b;
}

function dividir(a,b){
  return a / b;
}

function fatorial(param){
  if(param == 1)
    return 1;
  else 
    return param * fatorial(--param); 
}

function calcular(funcao, a, b){
  return funcao(a,b);
}

calcular(soma, 1, 2);           //3
calcular((a,b) => a + b, 1,2);  //3

calcular(subtrair, 1,2);        //-1
calcular((a,b) => a - b, 1,2);  //-1

calcular(multiplicar, 1, 2);    // 2
calcular((a,b) => a * b, 1,2);  // 2

calcular(dividir, 1,2);         //0.5
calcular((a,b) => a / b, 1,2)   //0.5

fatorial(10);

//http://www.w3schools.com/jsref/jsref_sort.asp
//Ordenação decrescente
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});

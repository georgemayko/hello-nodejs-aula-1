
let a = 10;
let b = 20;
let stringVazio = '';

function ePar(param){
  switch(param %2){
    case 0:
      console.log( param + 'é par');
      break;
    case 1:
      console.log( param + 'é ímpar');
      break;
  }
}

if (a > b) { //falso
  console.log("variável a é maior que b");
}

if(a < b) { //verdadeiro
  console.log("variável a é menor que b")
}


for (let cont = 0; cont <=10 ;cont++){
  ePar(cont);  
}

while (a-- != 0){
  console.info( a +"é diferente de 0");
}

do{
  console.info( a +"é diferente de 10");
  a++;
}while(a !=10);

if(!stringVazio)
  console.info('Valor de string é vazio');

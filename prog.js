/*
Nome: Rafael Nascimento Colares
Objetivo do código: Calcular equações de segundo grau completas e imcompletas, mostrando a função a ser 
calculada além do resultado se for 0.
*/


function limpar(){
  document.getElementById('resultado').innerHTML = "";
}

function exibires(a,b,c){
  let n1 = document.getElementById('a');
  let n2 = document.getElementById('b');
  let n3 = document.getElementById('c');
  let resultado = document.getElementById('resultado');
  a = Number(n1.value)
  b = Number(n2.value)
  c = Number(n3.value)
  if(a <= 0 || (b === 0  && c === 0)){
    resultado.innerHTML = 'Equação Inválida<br>';
  }else{
    if(b != 0 && c != 0){    //Caso Equação completa
      resultado.innerHTML = `A sua equação é: ${a}x² ${b}x ${c} = 0<br>`;
      return completa(a,b,c);
    }
    else if(b === 0){              //Caso b onde b = 0
      resultado.innerHTML = `A sua equação é: ${a}x² ${c} = 0<br>`;
    //document.write('<br>');
      return incompletac(a,c)
    }
    else if(c === 0){              //Caso c onde c = 0
      resultado.innerHTML = `A sua equação é: ${a}x² ${b}x = 0<br>`;
  //document.write('<br>');
      return incompletab(a,b);
    }
  }
}

function completa(a,b,c){
  let delta;         //Lógica do delta
  delta = (b**2)+(-4*(a*c));
  resultado.innerHTML += `<br>Resultado do delta: ${delta}<br>`
  if(delta < 0){
      resultado.innerHTML += '<br>Delta Irregular<br>';
  }else{
      let bhask1 = (-b + Math.sqrt(delta))/(2*a);       //Lógica da bhaskara, dividi em bhask1 e bhask2 sendo
      let bhask2 = (-b - Math.sqrt(delta))/(2*a);       //o linha x1 e linha x2
      resultado.innerHTML += `<br>Primeiro X: ${bhask1} e Segundo X: ${bhask2}<br>`;
      //console.log('O resultado é: ', a*(bhask1**2) + (b * bhask2) + c) //Pra ver se da certo, substitui os " x " por bhask 1 e 2
  }
}

function incompletab(a,b){
  let deltab;            //Lógica do delta para c = 0
  deltab = -(b/a);
  if(deltab < 0){
      resultado.innerHTML += '<br>Raiz quadrada de Negativo não existe<br>';
  }else{
      resultado.innerHTML += `<br>Resultado do delta: ${deltab} \n<br>`;
      resultado.innerHTML += `<br>Primeiro X: ${0} e Segundo X: ${deltab}<br>`;
  }
}


function incompletac(a,c){
  let deltac;         //Lógica do delta para b = 0
  deltac = (-c/a)
  if(deltac < 0){
      resultado.innerHTML += '<br>Raiz quadrada de Negativo não existe<br>';
  }else{
      resultado.innerHTML += `<br>Resultado do delta: ${deltac}<br>`;
      resultado.innerHTML += `<br>Primeiro X: ${-(Math.sqrt(deltac))} e Segundo X: ${Math.sqrt(deltac)}<br>`;
  }
}
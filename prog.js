/*
Nome: Rafael Nascimento Colares
Objetivo do código: Calcular equações de segundo grau completas e imcompletas, mostrando a função a ser calculada
além do resultado se for 0.
*/

function limpar(){
  document.getElementById('p1').innerHTML = "";
  document.getElementById('p2').innerHTML = "";
  document.getElementById('p3').innerHTML = "";
  document.getElementById('p4').innerHTML = "";
  document.getElementById('p5').innerHTML = "";
  document.getElementById('p6').innerHTML = "";
  document.getElementById('p7').innerHTML = "";
}

function exibires(a,b,c){
  let n1 = document.getElementById('a');
  let n2 = document.getElementById('b');
  let n3 = document.getElementById('c');
  resultado = document.getElementById('p1');
  a = Number(n1.value)
  b = Number(n2.value)
  c = Number(n3.value)
  if(a <= 0 || (b === 0  && c === 0)){
    resultado.innerHTML = 'Equação Inválida';
  }else{
    if(b != 0 && c != 0){    //Caso Equação completa
      resultado.innerHTML = `A sua equação é: ${a}x² ${b}x ${c} = 0 `;
      return completa(a,b,c);
    }
    else if(b === 0){              //Caso b onde b = 0
      resultado.innerHTML = `A sua equação é: ${a}x² ${c} = 0 `;
    //document.write('<br>');
      return incompletac(a,c)
    }
    else if(c === 0){              //Caso c onde c = 0
      resultado.innerHTML = `A sua equação é: ${a}x² ${b}x = 0 `;
  //document.write('<br>');
      return incompletab(a,b);
    }
  }
}

function completa(a,b,c){
  let delta;         //Lógica do delta
  let resultado2 = document.getElementById('p2');
  let resultado3 = document.getElementById('p3');
  delta = (b**2)+(-4*(a*c));
  resultado2.innerHTML = `Resultado do delta: ${delta}`
  if(delta < 0){
      resultado3.innerHTML = 'Delta Irregular';
  }else{
      let bhask1 = (-b + Math.sqrt(delta))/(2*a);       //Lógica da bhaskara, dividi em bhask1 e bhask2 sendo
      let bhask2 = (-b - Math.sqrt(delta))/(2*a);       //o linha x1 e linha x2
      resultado3.innerHTML = `Primeiro X: ${bhask1} e Segundo X: ${bhask2} `;
      //console.log('O resultado é: ', a*(bhask1**2) + (b * bhask2) + c) //Pra ver se da certo, substitui os " x " por bhask 1 e 2
  }
}

function incompletab(a,b){
  let deltab;
  let resultado4 = document.getElementById('p4');
  let resultado5 = document.getElementById('p5');            //Lógica do delta para c = 0
  deltab = -(b/a);
  if(deltab < 0){
      resultado4.innerHTML = 'Raiz quadrada de Negativo não existe';
  }else{
      resultado4.innerHTML = `Resultado do delta: ${deltab} \n`;
      resultado5.innerHTML = `Primeiro X: ${0} e Segundo X: ${deltab} `;
  }
}


function incompletac(a,c){
  let deltac;  
  let resultado6 = document.getElementById('p6');
  let resultado7 = document.getElementById('p7');         //Lógica do delta para b = 0
  deltac = (-c/a)
  if(deltac < 0){
      resultado6.innerHTML = 'Raiz quadrada de Negativo não existe';
  }else{
      resultado6.innerHTML = `Resultado do delta: ${deltac}`;
      resultado7.innerHTML = `Primeiro X: ${-(Math.sqrt(deltac))} e Segundo X: ${Math.sqrt(deltac)} `;
  }
}
     //chamar função
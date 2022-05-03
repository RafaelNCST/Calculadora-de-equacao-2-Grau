const result = document.getElementById("result") as HTMLInputElement

document.getElementById("calcular")!.addEventListener("click", () => {
    result.innerHTML = ""
    result.style.color = ""
    let a = (document.querySelector(".a") as HTMLInputElement).value
    let b = (document.querySelector(".b") as HTMLInputElement).value
    let c = (document.querySelector(".c") as HTMLInputElement).value
    if(+a === 0 || (+b === 0  && +c === 0)){
        result.innerHTML = "Invalid Equation"
        result.style.color = "red"
    }else{
        if(+b != 0 && +c != 0){//Caso Equação completa
            completa(a,b,c);
        }else if(+b === 0){//Caso b onde b = 0
            incompletac(a,c)
        }
        else if(+c === 0){//Caso c onde c = 0
            incompletab(a,b);
        }
    }
})

const completa = (a:string,b:string,c:string) => {
    let delta = ((+b)**2)+(-4*(+a*+c));
    result.innerHTML += `Resultado do delta: ${delta}`
    if(delta < 0){
        result.innerHTML += "<br>Delta Irregular";
    }else{
        let bhask1 = (-(+b) + Math.sqrt(delta))/(2*(+a));       //Lógica da bhaskara, dividi em bhask1 e bhask2 sendo
        let bhask2 = (-(+b) - Math.sqrt(delta))/(2*(+a));       //o linha x1 e linha x2
        result.innerHTML += `<br>Primeiro X: ${bhask1.toFixed(4)}<br> Segundo X: ${bhask2.toFixed(4)}`;
        //console.log('O resultado é: ', a*(bhask1**2) + (b * bhask2) + c) //Pra ver se da certo, substitui os " x " por bhask 1 e 2
    }
}

const incompletab = (a:string,b:string) => {
    let deltab = -(+b/+a);
    if(deltab < 0){
        result.innerHTML += 'Raiz quadrada de Negativo não existe';
    }else{
        result.innerHTML += `Resultado do delta: ${deltab}`;
        result.innerHTML += `<br>Primeiro X: ${0}<br> Segundo X: ${deltab.toFixed(4)}`;
    }
}
  
  
const incompletac = (a:string,c:string) => {
    let deltac = (-(+c)/+a)
    if(deltac < 0){
        result.innerHTML += 'Raiz quadrada de Negativo não existe';
    }else{
        result.innerHTML += `<br>Resultado do delta: ${deltac}`;
        result.innerHTML += `<br>Primeiro X: ${-(Math.sqrt(deltac)).toFixed(4)}<br> Segundo X: ${Math.sqrt(deltac).toFixed(4)}`;
    }
}
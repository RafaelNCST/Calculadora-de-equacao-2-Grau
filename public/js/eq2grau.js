const result = document.getElementById("result");

document.getElementById("calculate").addEventListener("click", () => {
    result.innerHTML = "";
    result.style.color = "";
    let a = document.querySelector(".a").value;
    let b = document.querySelector(".b").value;
    let c = document.querySelector(".c").value;
    if (+a === 0 || (+b === 0 && +c === 0)) {
        result.innerHTML = "Invalid Equation";
        result.style.color = "red";
    }
    else {
        if (+b != 0 && +c != 0) {
            complete(a, b, c);
        }
        else if (+b === 0) {
            incompleteb(a, c);
        }
        else if (+c === 0) {
            incompletec(a, b);
        }
    }
});

const complete = (a, b, c) => {
    let delta = ((+b) ** 2) + (-4 * (+a * +c));
    result.innerHTML += `Resultado do delta: ${delta}`;
    if (delta < 0) {
        result.innerHTML += "<br>Delta Irregular";
    }
    else {
        let bhask1 = (-(+b) + Math.sqrt(delta)) / (2 * (+a));
        let bhask2 = (-(+b) - Math.sqrt(delta)) / (2 * (+a));
        result.innerHTML += `<br>Primeiro X: ${bhask1.toFixed(4)}<br> Segundo X: ${bhask2.toFixed(4)}`;
    }
};

const incompleteb = (a, b) => {
    let deltab = -(+b / +a);
    if (deltab < 0) {
        result.innerHTML += 'Raiz quadrada de Negativo não existe';
    }
    else {
        result.innerHTML += `Resultado do delta: ${deltab}`;
        result.innerHTML += `<br>Primeiro X: ${0}<br> Segundo X: ${deltab.toFixed(4)}`;
    }
};

const incompletec = (a, c) => {
    let deltac = (-(+c) / +a);
    if (deltac < 0) {
        result.innerHTML += 'Raiz quadrada de Negativo não existe';
    }
    else {
        result.innerHTML += `<br>Resultado do delta: ${deltac}`;
        result.innerHTML += `<br>Primeiro X: ${-(Math.sqrt(deltac)).toFixed(4)}<br> Segundo X: ${Math.sqrt(deltac).toFixed(4)}`;
    }
};

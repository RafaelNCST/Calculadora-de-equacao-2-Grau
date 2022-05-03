"use strict";
let calculatorImgeq2Degree = document.getElementById("imgcalculatoreq2");
let formulaImgeq2Degree = document.getElementById("imgformulaeq2");
const menueq2 = document.querySelector(".menu");
const sunChangeEq2Degree = () => {
    document.body.style.setProperty("--primary-color", "rgba(236,199,154,1)");
    document.body.style.setProperty("--color-words", "black");
    document.body.style.setProperty("--border-items", "1px solid rgb(156, 144, 128)");
    document.body.style.setProperty("--bg-hover", "rgb(199, 184, 165)");
    document.body.style.setProperty("--color-word", "black");
    document.body.style.setProperty("--bg-input", "rgb(218, 207, 189)");
    calculatorImgeq2Degree.setAttribute("src", "../images/calculator.png");
    formulaImgeq2Degree.setAttribute("src", "../images/formula.png");
};
const moonChangeEq2Degree = () => {
    document.body.style.setProperty("--primary-color", "rgb(30, 28, 39)");
    document.body.style.setProperty("--color-words", "white");
    document.body.style.setProperty("--border-items", "1px solid rgb(66, 61, 87)");
    document.body.style.setProperty("--bg-hover", "rgb(63, 60, 75)");
    document.body.style.setProperty("--color-word", "white");
    document.body.style.setProperty("--bg-input", "rgb(98, 93, 121)");
    calculatorImgeq2Degree.setAttribute("src", "../images/calculatorWhite.png");
    formulaImgeq2Degree.setAttribute("src", "../images/formulaWhite.png");
};
document.querySelector(".suneq2").addEventListener("click", sunChangeEq2Degree);
document.querySelector(".mooneq2").addEventListener("click", moonChangeEq2Degree);
menueq2.addEventListener("click", () => {
    const chooseMenuEq2Degree = document.querySelectorAll(".choose-menu");
    if (menueq2.clientHeight === 24) {
        menueq2.classList.remove("menu");
        menueq2.classList.add("menuOpen");
        calculatorImgeq2Degree.style.height = "30px";
        formulaImgeq2Degree.style.height = "30px";
        for (let item of chooseMenuEq2Degree) {
            item.style.opacity = "1";
            item.style.pointerEvents = "all";
        }
    }
    else {
        menueq2.classList.remove("menuOpen");
        menueq2.classList.add("menu");
        calculatorImgeq2Degree.style.height = "0px";
        formulaImgeq2Degree.style.height = "0px";
        for (let item of chooseMenuEq2Degree) {
            item.style.opacity = "0";
            item.style.pointerEvents = "none";
        }
    }
});
document.querySelector(".choose-menu1").addEventListener("click", () => {
    window.location.href = "/Calculadora.html";
});
document.querySelector(".choose-menu2").addEventListener("click", () => {
    window.location.href = "/public/html/Eq2grau.html";
});

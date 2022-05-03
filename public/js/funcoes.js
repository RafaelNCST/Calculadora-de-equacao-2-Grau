"use strict";
let calculatorImg = document.getElementById("imgcalculator");
let formulaImg = document.getElementById("imgformula");
const menu = document.querySelector(".menu");
const sunChange = () => {
    document.body.style.setProperty("--primary-color", "rgba(236,199,154,1)");
    document.body.style.setProperty("--color-words", "black");
    document.body.style.setProperty("--border-items", "1px solid rgb(156, 144, 128)");
    document.body.style.setProperty("--bg-hover", "rgb(199, 184, 165)");
    calculatorImg.setAttribute("src", "./public/images/calculator.png");
    formulaImg.setAttribute("src", "./public/images/formula.png");
};
const moonChange = () => {
    document.body.style.setProperty("--primary-color", "rgb(30, 28, 39)");
    document.body.style.setProperty("--color-words", "white");
    document.body.style.setProperty("--border-items", "1px solid rgb(66, 61, 87)");
    document.body.style.setProperty("--bg-hover", "rgb(63, 60, 75)");
    calculatorImg.setAttribute("src", "./public/images/calculatorWhite.png");
    formulaImg.setAttribute("src", "./public/images/formulaWhite.png");
};
document.querySelector(".sun").addEventListener("click", sunChange);
document.querySelector(".moon").addEventListener("click", moonChange);
menu.addEventListener("click", () => {
    const chooseMenu = document.querySelectorAll(".choose-menu");
    if (menu.clientHeight === 24) {
        menu.classList.remove("menu");
        menu.classList.add("menuOpen");
        calculatorImg.style.height = "30px";
        formulaImg.style.height = "30px";
        for (let item of chooseMenu) {
            item.style.opacity = "1";
            item.style.pointerEvents = "all";
        }
    }
    else {
        menu.classList.remove("menuOpen");
        menu.classList.add("menu");
        calculatorImg.style.height = "0px";
        formulaImg.style.height = "0px";
        for (let item of chooseMenu) {
            item.style.opacity = "0";
            item.style.pointerEvents = "none";
        }
    }
});
document.querySelector(".choose-menu1").addEventListener("click", () => {
    window.location.replace("/Calculadora.html");
});
document.querySelector(".choose-menu2").addEventListener("click", () => {
    window.location.replace("/public/html/Eq2grau.html");
});

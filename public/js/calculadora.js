"use strict";
let resultCalc = document.getElementById("resultCalc");
let operation = "", numberOne = "", currentnumber = "", numberTwo = "";
document.querySelectorAll(".button").forEach((e) => {
    e.addEventListener("click", () => getButton(e));
});
const getButton = (e) => {
    let clickedItem = e.dataset.number;
    if (resultCalc.innerHTML.length >= 15) {
        let showWindow = document.getElementById("warning");
        showWindow.style.opacity = "1";
        setTimeout(hiddenWarning, 4000);
    }
    else {
        if (!!+clickedItem || clickedItem === "0" || clickedItem === ".") {
            currentnumber += clickedItem;
            numberTwo += clickedItem;
            resultCalc.innerHTML += clickedItem;
        }
        else {
            if (operation.length >= 1) {
                return;
            }
            else {
                operation += clickedItem;
                numberOne += currentnumber;
                numberTwo = "";
                resultCalc.innerHTML += operation;
            }
        }
    }
};
document.querySelector(".equals").addEventListener("click", () => {
    let firstNumber = parseFloat(numberOne);
    let secondNumber = parseFloat(numberTwo);
    switch (operation) {
        case "+":
            currentnumber = (firstNumber + secondNumber).toString();
            resultCalc.innerHTML = currentnumber;
            break;
        case "-":
            currentnumber = (firstNumber - secondNumber).toString();
            resultCalc.innerHTML = currentnumber;
            break;
        case "x":
            currentnumber = (firstNumber * secondNumber).toString();
            resultCalc.innerHTML = currentnumber;
            break;
        case "÷":
            if (firstNumber === 0) {
                resultCalc.innerHTML = "Não é um numero";
            }
            else if (secondNumber === 0) {
                resultCalc.innerHTML = "Ao infinito e além";
            }
            else {
                currentnumber = (firstNumber / secondNumber).toString();
                resultCalc.innerHTML = currentnumber;
            }
            break;
        default:
            return;
    }
    numberOne = "";
    operation = "";
});
document.querySelector(".apagar").addEventListener("click", () => {
    resultCalc.innerHTML = "";
    currentnumber = "";
    operation = "";
    numberOne = "";
    numberTwo = "";
});
const hiddenWarning = () => {
    document.getElementById("warning").style.opacity = "0";
};

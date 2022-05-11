let Display = document.getElementById("Display");
let operation = "", numberOne = "", currentnumber = "", numberTwo = "";

const viewKeyOnClick = (e) => {
    clickedItem = e.dataset.number;
    if (Display.innerHTML.length >= 15){
        let showWindow = document.getElementById("warning");
        showWindow.style.opacity = "1";
        setTimeout(hiddenWarning, 4000);
    }
    else{
        currentnumber += clickedItem;
        numberTwo += clickedItem;
        Display.innerHTML += clickedItem;
    }
}

const viewOperationOnClick = (e) => {
    clickedItem = e.dataset.number;
    if(operation.length > 1){
        return;
    }else{
        operation += clickedItem;
        numberOne += currentnumber;
        numberTwo = "";
        Display.innerHTML += operation;
    }
}


document.querySelectorAll(".operation").forEach((e) => {
    e.addEventListener("click", () => viewOperationOnClick(e))
})

document.querySelectorAll(".tecla").forEach((e) => {
    e.addEventListener("click", () => viewKeyOnClick(e));
});


document.querySelector(".equals").addEventListener("click", () => {
    let firstNumber = parseFloat(numberOne);
    let secondNumber = parseFloat(numberTwo);
    switch (operation) {
        case "+":
            currentnumber = (firstNumber + secondNumber).toString();
            Display.innerHTML = currentnumber;
            break;
        case "-":
            currentnumber = (firstNumber - secondNumber).toString();
            Display.innerHTML = currentnumber;
            break;
        case "x":
            currentnumber = (firstNumber * secondNumber).toString();
            Display.innerHTML = currentnumber;
            break;
        case "÷":
            if (firstNumber === 0) {
                Display.innerHTML = "Ai não brow";
            }
            else if (secondNumber === 0) {
                Display.innerHTML = "Ao infinito e além";
            }
            else {
                currentnumber = (firstNumber / secondNumber).toString();
                Display.innerHTML = currentnumber;
            }
            break;
        default:
            return;
    }
    numberOne = "";
    operation = "";
});

document.querySelector(".clear").addEventListener("click", () => {
    Display.innerHTML = "";
    currentnumber = "";
    operation = "";
    numberOne = "";
    numberTwo = "";
});

const hiddenWarning = () => {
    document.getElementById("warning").style.opacity = "0";
};

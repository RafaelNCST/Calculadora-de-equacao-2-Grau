let calculatorImg = document.getElementById("imgcalculator");
let formulaImg = document.getElementById("imgformula");
const menu = document.querySelector(".menu");

const getStyleChange = (element, style) => {
    document.body.style.setProperty(element, style)
}

const changeImagePerMode = {
    changePerSun: () => {
        calculatorImg.setAttribute("src", "./public/images/calculator.png");
        formulaImg.setAttribute("src", "./public/images/formula.png");
    },
    changePerMoon: () => {
        calculatorImg.setAttribute("src", "./public/images/calculatorWhite.png");
        formulaImg.setAttribute("src", "./public/images/formulaWhite.png");
    },
}

//Modo noturno e modo day;
const sunButton = () => {
    getStyleChange("--primary-color", "rgba(236,199,154,1)");
    getStyleChange("--color-words", "black");
    getStyleChange("--border-items", "1px solid rgb(156, 144, 128)");
    getStyleChange("--bg-hover", "rgb(199, 184, 165)");
    getStyleChange("--bg-input", "rgb(218, 207, 189)");
    changeImagePerMode.changePerSun()
};

const moonButton = () => {
    getStyleChange("--primary-color", "rgb(30, 28, 39)");
    getStyleChange("--color-words", "white");
    getStyleChange("--border-items", "1px solid rgb(66, 61, 87)");
    getStyleChange("--bg-hover", "rgb(63, 60, 75)");
    getStyleChange("--bg-input", "rgb(98, 93, 121)");
    changeImagePerMode.changePerMoon()
};

document.querySelector(".sun").addEventListener("click", sunButton);
document.querySelector(".moon").addEventListener("click", moonButton);


//Escolher menu
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
    window.location.replace("/index.html");
});

document.querySelector(".choose-menu2").addEventListener("click", () => {
    window.location.replace("Eq2grau.html");
});

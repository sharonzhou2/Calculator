let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let currValue = "0";
let secondVal = "0";
let currOperator = null;
let resetScreen = false;


buttons.forEach((button => {
    button.addEventListener('click', (e) => {
        // console.log(e.target.classList.value);
        if (e.target.classList.value === 'digits') {
            append(e);
        }

        if (e.target.classList.value ==='dot') {
            if (display.textContent === "") {
                display.textContent = "0";
            }
            if (display.textContent.includes(".")) return;
            display.textContent += ".";


        }
        if (e.target.classList.value === "operator equals") {
            evaluate(e);

        }

        if (e.target.classList.value === 'operator') {
            if (currOperator !== null) {
                evaluate(e);
            }
            currValue = display.textContent;
            currOperator = e.target.outerText;
            resetScreen = true;
        }

        if (e.target.id === "clear") {
            display.textContent = "0";
            currValue = "0";
            secondVal = "0";
            currOperator = null;
        }

        if (e.target.id === "delete") {
            console.log(currValue.length);
            if (currValue.length === 1) {
                display.textContent = 0;
             
            } else {
                currValue = currValue.slice(0 , -1);
                display.textContent = currValue;
            }
        }
    })
    // console.log(currValue);

}))
let resettingScreen = () => {
    display.textContent = "";
    resetScreen = false;
}
const append = (e) => {
           
    if (display.textContent === "0" || resetScreen) {
        resettingScreen();
        console.log("hellooo");
    } 
    display.textContent += e.target.outerText;
    
    
   


};

const evaluate = (e) => {
    if (!currOperator) {
        display.textContent = "ERROR";
    } else {
    
        secondVal = display.textContent;
        display.textContent = roundNumber(operate(currOperator, currValue, secondVal));
        currOperator = null;
    }
    
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }


function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch(operator) {
        case "+":
            return add(a, b);

        case "−":
            return subtract(a, b);
        
        case "×":
            return multiply(a, b);
        
        case "÷":
            if (b === "0") {
                return "ERROR";
            }
            return divide(a,b);
        default:
            return null;
}
}
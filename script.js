let no1 = "";
let no2 = "";
let operator = "";
let result = "";

let add = function(a, b){
    return a + b;
}

let sub = function(a,b){
    return a - b;   
}

let multiply = function(a,b){
    return a * b;   
}

let divide = function(a,b){
    return a / b;
}

let operate = function(n1, op, n2){
    if (op == "+"){
        return add(n1, n2);

    }
    else if (op == "-"){
        return sub(n1, n2);
        
    }
    else if (op == "*"){
        return multiply(n1, n2);
        
    }
    else if (op == "/"){
        return divide(n1, n2);
        
    }
}

let display = document.querySelector("#display");
let populateDisplay = function(){
    if (no1 != ""){
        display.textContent = no1;
    }
    if (operator != ""){
        display.textContent += operator;
    }
    if (no2 != ""){
        display.textContent += no2;
    }
        
};     


let numbers = document.querySelectorAll(".number");
numbers.forEach((number) => { 
    number.addEventListener("click", () => {
        if(!operator){
            no1 += number.textContent;
            console.log(no1);
        }
        else {
            no2 += number.textContent
            console.log(no2);
        }
        populateDisplay();
    });    
});

let operators = document.querySelectorAll(".operator");
operators.forEach((chosenOperator) => {
    chosenOperator.addEventListener("click", () => {
        if (!operator){  
            operator = chosenOperator.textContent;
            console.log(operator);
            populateDisplay();
        }
    });
});

let equalsTo = document.querySelector(".equalsTo");
    equalsTo.addEventListener("click", () => {
        no1 = parseInt(no1);
        no2 = parseInt(no2);
        result = operate(no1, operator, no2)
        console.log(operate(no1, operator, no2));
        no2 = "";
        operator = "";
        no1 = result;
        populateDisplay();
    });

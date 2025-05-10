let no1, no2, operator;

let add = function( a, b){
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
        add(n1, n2);

    }
    else if (op == "-"){
        sub(n1, n2);
        
    }
    else if (op == "*"){
        multiply(n1, n2);
        
    }
    else if (op == "/"){
        divide(n1, n2);
        
    }

}
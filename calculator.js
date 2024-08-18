let expression = "";

function updateOutput(value) {
    document.getElementById("output").value = value;
}

function appendToExpression(value) {
    expression += value;
    updateOutput(expression);
}

function clearOutput() {
    expression = "";
    updateOutput(expression);
}

function result() {
    try {
        expression = eval(expression);
        updateOutput(expression);
    } catch (error) {
        updateOutput("Error");
        expression = "";
    }
}

function add() {
    appendToExpression("+");
}

function subtract() {
    appendToExpression("-");
}

function multiply() {
    appendToExpression("*");
}

function divide() {
    appendToExpression("/");
}

function one() {
    appendToExpression("1");
}

function two() {
    appendToExpression("2");
}

function three() {
    appendToExpression("3");
}

function four() {
    appendToExpression("4");
}

function five() {
    appendToExpression("5");
}

function six() {
    appendToExpression("6");
}

function seven() {
    appendToExpression("7");
}

function eight() {
    appendToExpression("8");
}

function nine() {
    appendToExpression("9");
}

function zero() {
    appendToExpression("0");
}

function dot() {
    appendToExpression(".");
}

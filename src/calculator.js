const safeEval = require('notevil');
class Calculator {
    calculate(equation) {
        console.log('EQUATION ', equation);
        const mathsy = equation.replace('x', '*').split(' =');
        return (safeEval(mathsy[0]));
    }
}

module.exports = Calculator;

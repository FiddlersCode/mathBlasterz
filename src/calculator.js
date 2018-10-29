class Calculator {
    calculate(equation) {
        console.log('EQUATION ', equation);
        const mathsy = equation.replace('x', '*').split(' =');
        return (eval(mathsy[0]));
    }
}

module.exports = Calculator;

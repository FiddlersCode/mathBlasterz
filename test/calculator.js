const expect = require('chai').expect;
const Calculator = require('../src/calculator');

describe('calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('can calculate an addition problem', () => {
        const expected = 2;
        const actual = calculator.calculate('1 + 1 = ?');
        expect(expected).to.eq(actual);
    });


    it('can calculate a multiplication problem', () => {
        const expected = 4;
        const actual = calculator.calculate('2 * 2 = ?');
        expect(expected).to.eq(actual);
    });

    afterEach(() => {
        calculator = null;
    });
});

const Calculator = require('../Calculator');
const request = require('supertest');
const app = require('../../../app');

describe('Calculator controller', () => {

    const calculator = new Calculator();

    it('Parse a string into an array', () => {
        const string = '2+4-2*2';
        const parsedString = calculator.parseStringToArray(string);
        expect(parsedString).toStrictEqual([2, '+', 4, '-',  2, '*', 2]);
    })

    it('Resolve the calculation', () => {
        const string = '2+4-2*2';
        const result = calculator.calculate(string);
        expect(result).toStrictEqual(2);
    })

    it('POST /calculate return a JSON with the result of the calculation', async () => {
        const response = await request(app).post("/calculate").send({calc: '2+4-2*2'});
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        expect(response.body.result).toStrictEqual(2);
    })

})
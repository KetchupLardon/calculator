import { CalculatorApi } from '../api/CalculatorApi';

export class CalculatorActions {
    
    ops = ['/', '*', '+', '-', 'CE'];

    addValue = (value, calculation, setCalculation) => {
        /*
        1st line: forbid a operators following another and to start by an operator
        2nd line: forbid a decimal point following another
        3rd line: forbid to start with several 0 and to have several 0 juste after an operator
        */
        if(
            (this.ops.includes(value) && (calculation === '' || this.ops.includes(calculation.slice(-1))))
            || (value === '.' && calculation.slice(-1) === '.')
            || (value === '0' && ((calculation.slice(-2, -1) === '' && calculation.slice(-1) === '0') || (this.ops.includes(calculation.slice(-2, -1)) && calculation.slice(-1) === '0')))
        ) return
        setCalculation(calculation + value.toString());
    }

    deleteLast = (calculation, setCalculation) => {
        if(calculation === '') return
        const value = calculation.slice(0, -1);
        setCalculation(value);
    }

    validator = async (calculation, setCalculation) => {
        const calculator = new CalculatorApi();
        const response = await calculator.calculationResult(calculation);
        setCalculation(response.result.toString());
    }

}
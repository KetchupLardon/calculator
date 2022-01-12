import { Button } from './Button';
import { CalculatorActions } from '../utils/CalculatorActions';

export const OperatorButtons = () => {
    const calculatorActions = new CalculatorActions();
    const operators = calculatorActions.ops;
    return (
        operators.map((operator, i) => {
            return <Button key={`operator_button_${i}`} cssClass='operator_button'>{operator}</Button>
        })
    );
}
import { useContext } from "react";
import { CalculationData } from "../views/Calculator";
import { CalculatorActions } from "../utils/CalculatorActions";

export const Button = ({children, cssClass}) => {
    const {calculation, setCalculation} = useContext(CalculationData);

    const calculatorActions = new CalculatorActions();

    return (
        <button
            className={`btn ${cssClass}`}
            onClick={(e) => {
                if(children === 'CE'){
                    calculatorActions.deleteLast(calculation, setCalculation);
                } else if (children === "=") {
                    calculatorActions.validator(calculation, setCalculation);
                } else {
                    calculatorActions.addValue(e.target.innerHTML, calculation, setCalculation);
                }
            }}
        >
            {children}
        </button>
    );
}
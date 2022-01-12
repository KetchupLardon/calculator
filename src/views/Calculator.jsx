import { useState, createContext } from 'react';
import { Screen } from '../components/Screen';
import { OperatorButtons } from '../components/OperatorButtons';
import { DigitButtons } from '../components/DigitButtons';
import { Button } from '../components/Button';
import '../styles/calculator.css';

export const CalculationData = createContext(null);

export const Calculator = () => {

    const [calculation, setCalculation] = useState('');
    
    return (
        <CalculationData.Provider value={{calculation, setCalculation}} >
            <div className='calculator'>
                <Screen calculation={calculation} />
                <div className='button_container'>
                    <div className='operator_button_container'>
                        <OperatorButtons />
                    </div>
                    <div className='digit_button_container'>
                        <DigitButtons />
                        <Button cssClass='digit_button'>.</Button>
                        <Button cssClass='digit_button'>0</Button>
                        <Button cssClass='equal_button'>=</Button>
                    </div>
                </div>
            </div>
        </CalculationData.Provider>
    );
}
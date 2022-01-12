import { Button } from './Button';

export const DigitButtons = () => {
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        digits.map((digit, i) => {
            return <Button key={`digit_button_${i}`} cssClass='digit_button'>{digit}</Button>
        })
    );
}
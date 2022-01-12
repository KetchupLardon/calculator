class Calculator {

    parseStringToArray = (string) => {
        const parsedStringStorage = [];
        const operators = ['*', '/', '+', '-'];
        let token = '';
        for (const character of string) {
            if (operators.includes(character)) {
                parsedStringStorage.push(parseFloat(token), character);
                token = '';
            } else {
                token += character;
            }
        }
        if (token !== '') {
            parsedStringStorage.push(parseFloat(token));
        }
        return parsedStringStorage;
    }
    
    calculate = (string) => {
        const operatorPrecedence = [
            {'*': (a, b) => a * b, '/': (a, b) => a / b},
            {'+': (a, b) => a + b, '-': (a, b) => a - b}
        ];
        let operator;
        let tokens = this.parseStringToArray(string);
        for (const operators of operatorPrecedence) {
            const newTokens = [];
            for (const token of tokens) {
                if (token in operators) {
                    operator = operators[token];
                } else if (operator) {
                    newTokens[newTokens.length - 1] = 
                        operator(newTokens[newTokens.length - 1], token);
                    operator = null;
                } else {
                    newTokens.push(token);
                }
            }
            tokens = newTokens;
        }
        if (tokens.length > 1) {
            console.log('Error: unable to resolve calculation');
            return tokens;
        } else {
            return tokens[0];
        }
    }
    
    sendResult = (req, res) => {
        const calc = req.body.calc;
        const result = this.calculate(calc)
        res.json({result});
    }
}

module.exports = Calculator;
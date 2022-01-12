export class CalculatorApi {
    async calculationResult(calculation){
        const response = await fetch("http://localhost:4000/calculate", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({calc: calculation})
        })
        return response.json();
    }
}
function converter() {
    let input = document.getElementById('valueReal');
    let cash = parseFloat(input.value);
    let dolar = cash / 5.8;
    let result = document.getElementById('result');
    result.textContent = `Ò valor de R$${cash} reais, é equivalente á $${dolar.toFixed(2)} dolar.`
};
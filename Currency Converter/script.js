function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        usd: {
            eur: 0.85,
            gbp: 0.72
        },
        eur: {
            usd: 1.18,
            gbp: 0.85
        },
        gbp: {
            usd: 1.39,
            eur: 1.18
        }
    };

    if (!isNaN(amount) && amount > 0) {
        const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        document.getElementById('convertedAmount').textContent = convertedAmount.toFixed(2);
    } else {
        alert('Please enter a valid amount.');
    }
}

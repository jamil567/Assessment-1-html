function calculateTotalCost() {
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
        alert("Please enter valid numbers for cost and liters.");
        return;
    }

    const totalCost = (costPerLiter * litersPurchased).toFixed(2);

    document.getElementById('totalCost').innerText = `Total Cost: Dhs${totalCost}`;
}

document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);
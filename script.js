const calculateTemp = () => {
    const numberTemp = parseFloat(document.getElementById('temp').value);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = (cel * 9/5) + 32;
        return fahrenheit.toFixed(2);
    }

    const fehToCel = (fehr) => {
        let celsius = (fehr - 32) * 5/9;
        return celsius.toFixed(2);
    }

    let result;

    if (valueTemp === 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${numberTemp}° Celsius is equal to ${result}° Fahrenheit`;
    } else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${numberTemp}° Fahrenheit is equal to ${result}° Celsius`;
    }
}

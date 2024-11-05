function generateTableForLoop() {
    let number = parseInt(document.getElementById('number').value);
    let result = '';

    if (isNaN(number) || number <= 0) {
        document.getElementById('tableResult').textContent = "Please enter a valid positive number.";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }

    document.getElementById('tableResult').textContent = result;
}

function generateTableWhileLoop() {
    let number = parseInt(document.getElementById('number').value);
    let result = '';
    let i = 1;

    if (isNaN(number) || number <= 0) {
        document.getElementById('tableResult').textContent = "Please enter a valid positive number.";
        return;
    }

    while (i <= 10) {
        result += `${number} x ${i} = ${number * i}\n`;
        i++;
    }

    document.getElementById('tableResult').textContent = result;
}

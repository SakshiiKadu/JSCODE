function checkArrayElement() {
    let array = document.getElementById('arrayElements').value.split(',');
    let element = document.getElementById('checkElement').value;

    let index = array.indexOf(element);

    document.getElementById('result').textContent = index !== -1
        ? `Element "${element}" found at index ${index}`
        : 'Element Not Found!';
}

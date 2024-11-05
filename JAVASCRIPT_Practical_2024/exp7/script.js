let objectArray = [];

function addObject() {
    let fieldName = document.getElementById('fieldName').value;
    let fieldValue = document.getElementById('fieldValue').value;

    let obj = {};
    obj[fieldName] = fieldValue;

    objectArray.push(obj);

    displayArray();

    checkIfArray();
}

function displayArray() {
    let display = document.getElementById('arrayDisplay');
    display.innerHTML = JSON.stringify(objectArray, null, 2); 
}

function checkIfArray() {
    let result = document.getElementById('arrayCheckResult');
    let isArray = Array.isArray(objectArray);  
    result.innerHTML = `Is object Array an array? ${isArray}`;
}

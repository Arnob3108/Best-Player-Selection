function getInputFieldValueById(inputId) {
    let inputField = document.getElementById(inputId);
    let inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    let element = document.getElementById(elementId);
    let elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setTextElementValueById(elementId, newValue) {
    let element = document.getElementById(elementId);
    element.innerText = newValue;
}

function removeLastChild(elementId) {
    let element = document.getElementById(elementId);
    element.removeChild(element.lastChild);
}
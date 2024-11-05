function replaceText() {
    
    const originalString = document.getElementById('originalString').value;
    const matchString = document.getElementById('matchString').value;
    const patternString = document.getElementById('patternString').value;

    const newString = originalString.replace(matchString, patternString);

    document.getElementById('result').innerText = newString;
}

function reverseString() {
    const input = document.getElementById('inputString').value;
    
    const lengthOfString = input.length;
    
    let reversedString = '';
    for (let i = lengthOfString - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    
    document.getElementById('result').textContent = reversedString;
}

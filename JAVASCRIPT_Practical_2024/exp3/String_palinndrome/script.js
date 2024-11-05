function checkPalindrome() {

    let inputString = document.getElementById("userInput").value;

    let lowerCaseString = inputString.toLowerCase();

    let reversedString = lowerCaseString.split('').reverse().join('');

    if (lowerCaseString.localeCompare(reversedString) === 0) {
        document.getElementById("result").innerHTML = "The string is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "The string is not a palindrome.";
    }
}

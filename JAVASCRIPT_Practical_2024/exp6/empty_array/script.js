function emptyArrayElements() {
    let input = document.getElementById("arrayElements").value;

    let arr = input.split(',').map(item => item.trim());

    arr.length = 0;

    document.getElementById("result").innerText = `Array is now: [${arr}]`;
}

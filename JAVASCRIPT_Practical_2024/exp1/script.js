function calculateTriangleArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById('triangleResult').textContent = "Please enter valid positive numbers.";
        return;
    }

    let area = 0.5 * base * height;
    document.getElementById('triangleResult').textContent = "Area of Triangle: " + area.toFixed(2);
}

function calculateRectangleArea() {
    let length = parseFloat(document.getElementById('length').value);
    let breadth = parseFloat(document.getElementById('breadth').value);
    
    if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
        document.getElementById('rectangleResult').textContent = "Please enter valid positive numbers.";
        return;
    }

    let area = length * breadth;
    document.getElementById('rectangleResult').textContent = "Area of Rectangle: " + area.toFixed(2);
}

function calculateCircleArea() {
    let radius = parseFloat(document.getElementById('radius').value);
    
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('circleResult').textContent = "Please enter a valid positive number.";
        return;
    }

    let area = 3.14 * radius * radius;
    document.getElementById('circleResult').textContent = "Area of Circle: " + area.toFixed(2);
}

let a = +prompt("Задайте первое целочисленное число а");
let b = +prompt("Задайте второе целочисленное число b");
let c = a * b;
if (a >= 0 && b >= 0)
    alert(`a - b = ${a - b}`);
if (a < 0 && b < 0)
    alert(`a * b = ${a * b}`);
if (c <= 0)
    alert(`a + b = ${a + b}`);

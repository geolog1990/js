/**
 * Функция возвращает сумму двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция возвращает разницу параметров a и b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция возвраащет результат умножения a и b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция возвращает результат деления а на b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}

let k = 10, l = 5;

alert ("a + b = " + addition(k, l));
alert ("a - b = " + subtraction(k, l));
alert ("a * b = " + multiplication(k, l));
alert ("a / b = " + division(k, l));

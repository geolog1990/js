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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return addition(arg1, arg2);
            break;
        case '-':
            return subtraction(arg1, arg2);
            break;
        case '*':
            return multiplication(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
    }
}

let result = mathOperation(10, 5, '+');

// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let num1 = 10
let num2 = 20
let num3 = 15
function findLargest(num1, num2, num3) {
    if(num1 >= num2 && num1 >= num3) {
        return num1
    } else if (num2 >= num1 && num2 >= num3) {
        return num2
    } else {
        return num3
    }
}
const largest = findLargest(num1, num2, num3)
console.log(largest)
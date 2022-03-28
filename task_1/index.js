// Я использовал пустые скобки вызова в конце что б определить конец.

function sum(a) {
    let total = a
    function nextItem(b) {
        if (b !== undefined) {
            total += b
            return nextItem
        }
        return total
    }
    return nextItem
}

console.log(sum(1)(3)(7)()) // 11
console.log(sum(1)(2)()) // 3
console.log(sum(1)(2)(3)()) // 6
console.log(sum(5)(-1)(2)()) // 6
console.log(sum(6)(-1)(-2)(-3)()) // 0
console.log(sum(0)(1)(2)(3)(4)(5)()) // 15


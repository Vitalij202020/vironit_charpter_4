

function digitalRoot(n) {
    const arr = String(n).split('')
    if (arr.length === 1) {
        return +arr.join('')
    } else {
        let x = arr.reduce((prev, curr) => +prev + +curr, 0)
        return digitalRoot(x)
    }
}

console.log(digitalRoot(16)) // 7
console.log(digitalRoot(942)) // 6
console.log(digitalRoot(132189)) //6
console.log(digitalRoot(493193)) // 2

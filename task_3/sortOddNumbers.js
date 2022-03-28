function sortOddNumbers (arr) {
    const temp = []
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] !== 0) {
            temp.push(arr[i])
            arr[i] = null
        }
    }

    temp.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            arr[i] = temp[count]
            count++
        }
    }
    return arr
}


console.log(sortOddNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) //  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortOddNumbers([5, 8, 6, 3, 4])) //  [3, 8, 6, 5, 4]
console.log(sortOddNumbers([7, 1])) // [ 1, 7 ]

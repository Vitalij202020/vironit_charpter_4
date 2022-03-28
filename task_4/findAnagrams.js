function findAnagrams (item, arr) {
    const result = []
    let current = item.split('').sort().join('')
    let next

    for (var i = 0; i < arr.length; i++) {
        if (current.length === arr[i].length) {
            next = arr[i].split('').sort().join('')
            if (current === next) {
                result.push(arr[i])
            }
        }
    }
    return result
}

console.log(findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //  ['aabb', 'bbaa']
console.log(findAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //  ['carer', 'racer']
console.log(findAnagrams('laser', ['lazing', 'lazy',  'lacer'])) // []
'use strict'

const arr = [1, 2, 3, 4, 5]

arr.pop()
console.log(arr)

arr.push(78)
console.log(arr)

arr.shift(0)
console.log(arr)

for (let value of arr) {
	console.log(value)
}

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} Внутри массива ${arr}`)
})

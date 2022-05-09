let a = [20, 39, 48, 55, 18, 67]
console.log(a.slice())
console.log(a.slice(1))
console.log(a.slice(0, 3))
console.log(a.slice(-4))

function slic_value(arr) {
    return arr.slice(2, 5);
}
let b = slic_value([10, 30, 44, 88, 77, 22.82, 17])
console.log(b)
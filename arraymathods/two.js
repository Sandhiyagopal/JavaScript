let arr = [10, 343, 990, 33, 22, 45];
let max = arr[0];
for (i = 1; i <= arr.length - 1; i++) {
    if (arr[i] >= max) {
        max = arr[i];
        console.log(max, "-if")
    }
    console.log(max, "-for")
}
console.log(max)

let array = [200, 30, 22, 44, 77]
let maxi = array[0]
for (i = 1; i <= array.length - 1; i++) {
    if (array[i] >= maxi) {
        maxi = array[i]
        console.log(maxi)
    }
}
console.log(maxi)
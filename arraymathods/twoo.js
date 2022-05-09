function maxvalue(arr) {
    let max = arr[0]
    for (i = 1; i <= arr.length - 1; i++) {
        if (arr[i] >= max) {
            max = arr[i]
        }
    }
    return max;
}
let result = maxvalue([200, 300, 400, 400, 600, 800, 900]);
console.log(result)
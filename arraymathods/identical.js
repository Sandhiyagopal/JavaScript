/*let a = [10, 10, 20, 60]
let first = 0;
for (i = 1; i <= a.length - 1; i++) {
    if (a[i] != first) {
        console.log(false)
    }
}*/

/*function identical(arr) {
    let first = 0;
    for (i = 1; i <= arr.length - 1; i++) {
        if (arr[i] != first) {
            return false;
        }
        return true;
    }
}
let result = identical([18, 30, 40, 20, 30, 80])
console.log(result)
let result2 = identical([20, 20])
console.log(result2);*/
let a = [10, 20, 30]
a[100] = 52;
console.log(a.Length)
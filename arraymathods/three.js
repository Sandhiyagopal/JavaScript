function sum_value(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num;
    }
    console.log(arr.indexOf(40))
    return sum;
}
let result = sum_value([20, 10, 40, 80, 90]);
console.log(result)
var findAverage = function (nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
}
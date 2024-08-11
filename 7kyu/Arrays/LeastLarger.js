function leastLarger(arr, index) {
    const target = arr[index];
    let result = -1;
    let minLarger = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target && arr[i] < minLarger) {
            minLarger = arr[i];
            result = i;
        }
    }

    return result;
}
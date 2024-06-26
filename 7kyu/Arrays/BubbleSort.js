function bubble(arr) {
    let snapshots = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // Take a snapshot after change
                snapshots.push([...arr]);
            }
        }
    }
    return snapshots;
}
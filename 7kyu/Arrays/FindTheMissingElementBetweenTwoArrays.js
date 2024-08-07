function findMissing(arr1, arr2) {
    const countMap = new Map();

    // Count occurrences in the first array
    for (const num of arr1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Subtract occurrences based on the second array
    for (const num of arr2) {
        countMap.set(num, countMap.get(num) - 1);
    }

    // Find the element with a count of 1
    for (const [num, count] of countMap) {
        if (count === 1) {
            return num;
        }
    }
}
function findDifference(A, B) {
    const countA = {};
    const countB = {};

    // Count occurrences in A
    A.forEach(char => {
        countA[char] = (countA[char] || 0) + 1;
    });

    // Count occurrences in B
    B.forEach(char => {
        countB[char] = (countB[char] || 0) + 1;
    });

    const difference = [];

    // Find characters unique to A
    for (const char in countA) {
        if (!countB[char]) {
            difference.push(char);
        }
    }

    // Find characters unique to B
    for (const char in countB) {
        if (!countA[char]) {
            difference.push(char);
        }
    }

    return difference.sort();
}
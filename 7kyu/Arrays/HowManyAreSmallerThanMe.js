function smaller(arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                count++
            }
        }
        result.push(count)
    }
    return result
}

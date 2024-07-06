function sort(arr, indices) {
    const indexedValues = arr.map((value, i) => ({ value, index: indices[i] }))  
    indexedValues.sort((a, b) => a.index - b.index)

    const sortedArr = indexedValues.map((obj) => obj.value)  
    return sortedArr
}

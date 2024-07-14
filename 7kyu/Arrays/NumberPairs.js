function getLargerNumbers(arr1, arr2) {
    let newArray = []
    for (let i = 0; i < arr1.length; i++) {
        const elementArray1 = arr1[i]
        const elementArray2 = arr2[i]
        if (arr1[i] <= arr2[i]) {
            newArray.push(arr2[i])
        } else {
            newArray.push(arr1[i])
        }
    }
    return newArray
}
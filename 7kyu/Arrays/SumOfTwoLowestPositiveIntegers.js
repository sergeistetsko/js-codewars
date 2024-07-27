function sumTwoSmallestNumbers(array) {
    const firstMinNumber = Math.min(...array)
    const filteredArray = array.filter(item => item !== firstMinNumber)
    const secondMinNumber = Math.min(...filteredArray)
    return firstMinNumber + secondMinNumber
} 
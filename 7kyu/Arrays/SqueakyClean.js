function squeakyClean(originalArray) {
    return cleanedArray = originalArray.filter(item => (item !== '' && item !== 0 && item !== null && item !== undefined))
}

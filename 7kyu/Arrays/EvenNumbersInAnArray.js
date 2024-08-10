function evenNumbers(array, number) {
    // Filter the array to get only even numbers
    const evenNumbers = array.filter(num => num % 2 === 0);
    // Return the last 'number' even numbers
    return evenNumbers.slice(-number);
}
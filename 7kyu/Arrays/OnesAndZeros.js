function binaryArrayToNumber(binaryArray) {
    const binaryString = binaryArray.join(''); // Join the array elements into a string
    const decimalValue = parseInt(binaryString, 2); // Convert the binary string to an integer
    return decimalValue;
}

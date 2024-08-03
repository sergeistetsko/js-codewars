function broken(binaryString) {
    return binaryString.replace(/0/g, 'x').replace(/1/g, '0').replace(/x/g, '1')
}
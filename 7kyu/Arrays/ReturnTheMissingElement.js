function getMissingElement(superImportantArray){
    const expectedSum = 45
    const actualSum = superImportantArray.reduce((acc, num) => acc + num, 0)
    const missingElement = expectedSum - actualSum
    return missingElement
  }
  
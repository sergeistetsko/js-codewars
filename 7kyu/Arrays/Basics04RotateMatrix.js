function rotateMatrix(matrix) {
    const numRows = matrix.length
    const numCols = matrix[0].length

    // Создаем новую матрицу с перевернутыми размерами
    const rotatedMatrix = new Array(numCols).fill(null).map(() => new Array(numRows).fill(null))

    // Заполняем новую матрицу значениями из исходной
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            rotatedMatrix[numCols - col - 1][row] = matrix[row][col]
        }
    }

    return rotatedMatrix
}
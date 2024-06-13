function isSatorSquare(tablet) {
    const size = tablet.length
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        // Проверяем все четыре условия для Sator квадрата
        if (
          tablet[i][j] !== tablet[j][i] || // слева направо и сверху вниз
          tablet[i][j] !== tablet[size - j - 1][size - i - 1] || // снизу вверх и справа налево
          tablet[i][j] !== tablet[size - i - 1][size - j - 1] // справа налево и снизу вверх
        ) {
          return false
        }
      }
    }
    return true
  }
  
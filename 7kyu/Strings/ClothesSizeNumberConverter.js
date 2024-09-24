function sizeToNumber(size) {
  // Проверка на недопустимые случаи
  if (
    !size ||
    typeof size !== 'string' ||
    (size.includes('m') && size !== 'm')
  ) {
    return null
  }

  // Базовые размеры
  const baseSizes = {
    s: 36,
    m: 38,
    l: 40,
  }

  // Извлечение базового размера и подсчет количества модификаторов 'x'
  const baseSize = size.replace(/x/g, '')
  const modifierCount = size.length - baseSize.length

  // Проверка, является ли базовый размер допустимым
  if (!baseSizes.hasOwnProperty(baseSize)) {
    return null
  }

  // Вычисление европейского размера
  const europeanSize =
    baseSizes[baseSize] + modifierCount * 2 * (baseSize === 's' ? -1 : 1)

  return europeanSize
}

function evenLast(arr) {
  if (arr.length === 0) return 0

  const lastElement = arr[arr.length - 1]
  const sumEvenIndex = arr.reduce((sum, num, index) => {
    return index % 2 === 0 ? sum + num : sum
  }, 0)

  return sumEvenIndex * lastElement
}

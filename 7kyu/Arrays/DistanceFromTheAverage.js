function distancesFromAverage(arr){
    let average = arr.reduce((a, b) => a + b, 0) / arr.length
    return arr.map(x => Math.round((x - average) * -1 * 100) / 100).map(y => y == -0 ? 0 : y)
  }
  
function divCon(x){
    let number = 0
    let string = 0
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'string') {
        string += Number(x[i])
      } else if (typeof x[i] === 'number') {
        number += x[i]
      }
    }
    return number - string
  }
  
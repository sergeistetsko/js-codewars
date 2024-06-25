const sortReindeer = (reindeerNames) => {
    return [...reindeerNames].sort((a, b) => {
      const [, lastName1] = a.split(' ')
      const [, lastName2] = b.split(' ')
      return lastName1.localeCompare(lastName2)
    })
  }
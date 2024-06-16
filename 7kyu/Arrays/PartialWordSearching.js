function wordSearch(query, arrayOfStrings) {
  const searchQuery = query.toLowerCase()
  const foundStrings = arrayOfStrings.filter(str => str.toLowerCase().includes(searchQuery))
  
  return foundStrings.length > 0 ? foundStrings : ["Empty"]
}

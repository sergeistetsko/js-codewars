function chineseZodiac(year) {
    const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
    const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

    const animalIndex = (year - 1924) % 12
    const elementIndex = Math.floor((year - 1924) / 2) % 5

    const zodiacAnimal = animals[animalIndex]
    const zodiacElement = elements[elementIndex]

    return `${zodiacElement} ${zodiacAnimal}`
}
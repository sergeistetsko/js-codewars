function boredom(staff) {
    const scores = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      'pissing about': 25
    };
  
    let totalScore = 0;
  
    for (let person in staff) {
      if (scores.hasOwnProperty(staff[person])) {
        totalScore += scores[staff[person]];
      }
    }
  
    if (totalScore <= 80) {
      return 'kill me now';
    } else if (totalScore < 100) {
      return 'i can handle this';
    } else {
      return 'party time!!';
    }
  }
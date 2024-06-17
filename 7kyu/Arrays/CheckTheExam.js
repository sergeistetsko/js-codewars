function checkExam(correctAnswers, studentAnswers) {
    let score = 0;
  
    for (let i = 0; i < correctAnswers.length; i++) {
      if (studentAnswers[i] === '') {
        // Do nothing for blank answers
      } else if (studentAnswers[i] === correctAnswers[i]) {
        score += 4;
      } else {
        score -= 1;
      }
    }
  
    return score > 0 ? score : 0;
  }
  
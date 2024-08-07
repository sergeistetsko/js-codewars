function myLanguages(scores) {

    let filteredScores = Object.entries(scores).filter(([lang, score]) => score >= 60);

    filteredScores.sort((a, b) => b[1] - a[1]);

    return filteredScores.map(([lang, score]) => lang);
}
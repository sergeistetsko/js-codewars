function checkThreeAndTwo(startArray) {
    let countA = 0;
    let countB = 0;
    let countC = 0;

    startArray.forEach(element => {
        if (element === 'a') {
            countA++;
        } else if (element === 'b') {
            countB++;
        } else if (element === 'c') {
            countC++;
        }
    });

    return (countA === 3 && countB === 2) || (countA === 2 && countB === 3) ||
           (countA === 3 && countC === 2) || (countA === 2 && countC === 3) ||
           (countB === 3 && countC === 2) || (countB === 2 && countC === 3);
}

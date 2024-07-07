function operate(pcSet, operation) {
    let digits = operation.replace(/[^0-9]/g, "") * 1;
    let arr = pcSet.map(v => (v + digits) % 12);
    if (operation[operation.length - 1] === "I") {
      return pcSet.map(v => (12 - v + digits) % 12).sort((a, b) => a - b);
    }
    return arr.sort((a, b) => a - b);
  }
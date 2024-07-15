// - n and d will be positive BigInts, and also n > d. No need to check any of that
function factorialDivision(n, d) {
    return n === d ? BigInt(1) : n * factorialDivision(n - 1n, d)
}
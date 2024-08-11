function bitMarch(n) {
    const steps = [];
    let current = (1 << n) - 1; // Initial value with n bits set to 1

    while (current < 256) { // 256 is 2^8, the limit for 8 bits
        const step = [];
        for (let i = 7; i >= 0; i--) {
            step.push((current >> i) & 1);
        }
        steps.push(step);
        current <<= 1; // Shift bits to the left
    }

    return steps;
}
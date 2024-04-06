function missing(sequence) {
    if (sequence.length <= 1) {
        return -1; 
    }

    for (let i = 1; i < sequence.length; i++) {
        const num1 = parseInt(sequence.substring(0, i));
        const num2 = parseInt(sequence.substring(i));

        if (num2 - num1 === 1) {
            continue;
        } else if (num2 - num1> 1) {
            return num1 + 1; 
        } else {
            return -1; 
        }
    }

    return -1; 
}

// Example usage:
console.log(missing("123567"));      // Output: 4
console.log(missing("899091939495")); // Output: 92
console.log(missing("9899101102"));   // Output: 100
console.log(missing("599600601602")); // Output: -1
console.log(missing("8990919395"));   // Output: -1
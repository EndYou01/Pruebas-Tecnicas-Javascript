// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.

const n = 18
const firstNumber = 3


function solution(n, firstNumber) {
    if (firstNumber > n / 2) {
        return n / 2 + firstNumber - n
    }
    if (firstNumber == n / 2) {
        return 0
    }
    return n / 2 + firstNumber
}

function optimizedSolution(n, firstNumber) {
    return (n / 2 + firstNumber) % n
}


console.log(solution(n, firstNumber))
console.log(optimizedSolution(n, firstNumber))
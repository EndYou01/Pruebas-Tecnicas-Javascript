

// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be solution(inputString) = "dsbaz".

const inputString = "crazy"

function solution(inputString) {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const result = []

    inputString.split("").map((e, index) => {
        if (alphabet.indexOf(e) + 1 > 25) {
            result[index] = alphabet[0]
        } else {
            result[index] = alphabet[alphabet.indexOf(e) + 1]
        }
    })

    return result.join("")
}

const optimizedSolution = inputString =>
    inputString.split('').map(el =>
        (el === 'z') ? 'a' : String.fromCharCode(el.charCodeAt() + 1)
    ).join('')

console.log(solution(inputString))
console.log(optimizedSolution(inputString))

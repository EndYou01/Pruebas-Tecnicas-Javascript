

// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]

const inputArray = [1, 2, 1]

const elemToReplace = 1

const substitutionElem = 3

function solution(inputArray, elemToReplace, substitutionElem) {
    inputArray.map((e, index) => {
        if (e == elemToReplace) {
            inputArray[index] = substitutionElem
        }
    })
    return inputArray
}


console.log(solution(inputArray, elemToReplace, substitutionElem))
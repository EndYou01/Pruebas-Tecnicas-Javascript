

// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

const inputArray = [2, 4, 1, 0]

function solution(inputArray) {

    let maxDif = 0

    inputArray.map((element, index) => {

        let actualDif = 0

        if (element > inputArray[index + 1]) {
            actualDif = element - inputArray[index + 1];
            if (actualDif > maxDif) {
                maxDif = actualDif
            }
        } else {
            actualDif = inputArray[index + 1] - element
            if (actualDif > maxDif) {
                maxDif = actualDif
            }
        }

    })


    return maxDif
}


console.log(solution(inputArray))

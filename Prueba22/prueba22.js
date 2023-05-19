

// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

// Check out the image below for better understanding:

// const inputArray = [5, 3, 6, 7, 9]
// const inputArray = [1000, 999]
// const inputArray =[460, 397, 91, 542, 326, 929, 592, 721, 547, 155, 975, 307, 426, 811, 303, 124, 270, 913, 899, 583, 67, 591, 925, 445, 916, 905, 585, 493, 606, 625, 443, 954, 309, 743, 75, 993, 683, 962, 92, 746, 733, 145, 845, 60, 560, 181, 934, 421, 964, 278]
const inputArray = [4, 2, 3]

//Codigo Optimizado
function solution(inputArray) {
    const todosDivisores = inputArray.map(element => {
        return Array.from(new Array(element + 1), (_, i) => i).filter(i => element % i === 0)
    })

    let multiplesDivs = todosDivisores.flat().reduce((acc, cur) => [...acc, cur], []);

    let result = multiplesDivs.filter((item, index) => multiplesDivs.indexOf(item) === index).sort((a, b) => a - b)

    for (let index = 0; index < result[result.length - 1] + 1; index++) {
        if (result[index] !== index + 1) {
            return index + 1
        }
    }
}

// function solution(inputArray) {

//     function divisores(num) {
//         let results = []

//         for (let index = num; index > 0; index--) {
//             if (num % index == 0) {
//                 results.push(index)
//             }
//         }

//         return results
//     }

//     let todosDivisores = []

//     inputArray.map(element => {
//         divisores(element).map(e => {
//             if (!todosDivisores.includes(e)) {
//                 todosDivisores.push(e)
//             }
//         })
//     })

//     todosDivisores.sort((a, b) => {
//         if (a < b) {
//             return a - b
//         }
//     })

//     for (let index = 0; index < todosDivisores[todosDivisores.length-1]+1; index++) {

//         if (todosDivisores[index] !== index + 1) {
//             return index + 1
//         }
//     }
// }

console.log(solution(inputArray))

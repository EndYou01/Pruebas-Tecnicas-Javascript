// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Example

// For

// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be solution(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

// For

// image = [[7, 4, 0, 1], 
//          [5, 6, 2, 2], 
//          [6, 10, 7, 8], 
//          [1, 4, 2, 0]]
// the output should be

// solution(image) = [[5, 4], 
//                    [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.

const image = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
]

const image2 =
    [[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]


const image3 =
    [[36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45]]

const image4 =
    [[36, 0, 18, 9, 9, 45, 27],
    [27, 0, 54, 9, 0, 63, 90],
    [81, 63, 72, 45, 18, 27, 0],
    [0, 0, 9, 81, 27, 18, 45],
    [45, 45, 27, 27, 90, 81, 72],
    [45, 18, 9, 0, 9, 18, 45],
    [27, 81, 36, 63, 63, 72, 81]]


function optimizedSolution(image) {
    const result = [];
    for (let i = 0; i + 3 <= image.length; i++) {
        result.push([]);
        for (let j = 0; j + 3 <= image[0].length; j++) {
            let totalSquares = 0;
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    totalSquares += image[x][y];
                }
            }
            result[i].push(Math.floor(totalSquares / 9));
        }
    }
    return result;
}


// function solution(image) {
//     let totalSquare = 0
//     let result = [[], []]
//     let rows = 0
//     let firstLoop = false
//     while (rows + 3 <= image.length) {
//         let columns = 0
//         while (columns + 3 <= image[0].length) {
//             let i = rows
//             let totalSquares = 0
//             while (i < (rows + 3)) {
//                 let j = columns
//                 while (j < (columns + 3)) {
//                     totalSquares += image[i][j]
//                     j++
//                 }
//                 i++
//             }
//             if (firstLoop) {
//                 if (columns == 0) {
//                     result[rows] = []
//                 }
//                 result[rows][columns] = (Math.floor(totalSquares / 9))
//             } else {
//                 result[0].push((Math.floor(totalSquares / 9)))
//             }
//             totalSquare += 0.5
//             columns++
//             firstLoop = true
//         }
//         totalSquare++
//         rows++
//     }
//     result.map((e, index) => {
//         if (e == '') {
//             result.splice(index, 1);
//         }
//     })
//     return result
// }


console.log(optimizedSolution(image4))
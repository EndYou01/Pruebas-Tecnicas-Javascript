// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]
// Check out the image below for better understanding:

const matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
]

const matrix2 =
    [[true, false, false, true],
    [false, false, true, false],
    [true, true, false, true]]

function solution(matrix) {


    let result = []

    for (let i = 0; i < matrix.length; i++) {
        result.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            result[i][j] = 0
        }
    }

    console.log(matrix)
    console.log(result)


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == true) {
                console.log({ i, j })
                if (i + 1 < matrix.length) {
                    console.log(matrix.length)
                    result[i + 1][j] += 1
                    console.log('👇 ', result[i + 1][j])
                }
                if (i - 1 >= 0) {
                    result[i - 1][j] += 1
                    console.log('👆 ', result[i - 1][j])
                }
                if (j + 1 < matrix[0].length) {
                    result[i][j + 1] += 1
                    console.log('👉 ', result[i][j + 1])
                }
                if (j - 1 >= 0) {
                    result[i][j - 1] += 1
                    console.log('👈 ', result[i][j - 1])
                }
                if (i + 1 < matrix.length && j + 1 < matrix[0].length) {
                    result[i + 1][j + 1] += 1
                    console.log('👇👉 ', result[i + 1][j + 1])
                }
                if (i + 1 < matrix.length && j - 1 >= 0) {
                    result[i + 1][j - 1] += 1
                    console.log('👇👈 ', result[i + 1][j - 1])
                }
                if (i - 1 >= 0 && j + 1 < matrix[0].length) {
                    result[i - 1][j + 1] += 1
                    console.log('👆👉 ', result[i - 1][j + 1])
                }
                if (i - 1 >= 0 && j - 1 >= 0) {
                    result[i - 1][j - 1] += 1
                    console.log('👆👈 ', result[i - 1][j + 1])
                }
            }
        }
    }


    return result
}


console.log(solution(matrix2))


function optimizedSolution(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j]) {
                for (let x = Math.max(0, i - 1); x <= Math.min(rows - 1, i + 1); x++) {
                    for (let y = Math.max(0, j - 1); y <= Math.min(cols - 1, j + 1); y++) {
                        if (x !== i || y !== j) {
                            result[x][y]++;
                        }
                    }
                }
            }
        }
    }
    return result;
}

console.log(optimizedSolution(matrix2))

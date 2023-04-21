
const matrix = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]]

const matrix2 = [[1, 1, 1, 0],
[0, 5, 0, 1],
[2, 1, 3, 10]]

const matrix10 = [[4, 0, 1],
[10, 7, 0],
[0, 0, 0],
[9, 1, 2]]

const matrix1 = [2, 3, 4, 6]


function solution(matrix) {

    let counter = 0

    let matrixCopy = matrix;

    matrix.map((element1, index1) => {

        element1.map((element2, index2) => {

            // console.log(index2 + "  index2")

            if (element2 == 0 && index1 != matrix.length -1) {
                matrixCopy[index1 + 1][index2] = 0
            }

        })

    })

    matrixCopy.map(e1 => {

        e1.map(e2 => {
            if (e2 != 0) {
                counter += e2;
            }
        })

    })

    return counter;
}

console.log(solution(matrix10))
console.log("Expected Output: 15")
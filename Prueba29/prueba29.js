// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.



// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.


// const cell1 = "A1"
// const cell2 = "C3"


const cell1 = "A1"
const cell2 = "H8"

function solution(cell1, cell2) {

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    cell1.split("")
    const cell1Letter = letters.indexOf(cell1[0].toLowerCase()) + 1
    const cell1Number = parseInt(cell1[1])
    console.log({ cell1Number, cell1Letter })

    cell2.split("")
    const cell2Letter = letters.indexOf(cell2[0].toLowerCase()) + 1
    const cell2Number = parseInt(cell2[1])
    console.log({ cell2Number, cell2Letter })

    function compare(x) {
        if (x % 2 == 0) {
            return 'par'
        } else {
            return 'impar'
        }
    }

    if (compare(cell1Number) == compare(cell2Number) && compare(cell1Letter) == compare(cell2Letter)) {
        return true
    } else if (compare(cell1Letter) == compare(cell1Number) && compare(cell2Letter) == compare(cell2Number)) {
        return true
    } else {
        return false
    }
}


function optimizedSolution1(cell1, cell2) {
    let board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };

    const total1 = board[cell1[0]] + parseInt(cell1[1]);
    const total2 = board[cell2[0]] + parseInt(cell2[1]);

    return total1 % 2 === total2 % 2;

}



function optimizedSolution1() {
    //Get the color (0=black, 1=white) for a given cell
    var color = s => (Buffer(s)[0] - s[1]) % 2

    var solution = (a, b) => color(a) == color(b)

    return solution
}




console.log(solution(cell1, cell2))
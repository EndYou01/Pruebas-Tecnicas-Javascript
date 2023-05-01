

const a1 = [-1, 150, 190, 170, -1, -1, 160, 180];
const a2 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];

function solution(a) {

    let arrayCopy = a;
    let toSort = [];
    let counter = 0;

    arrayCopy.map((element, index) => {

        if (element != -1) {
            toSort.push(element)
            arrayCopy[index] = 'X'
        }
    })


    toSort.sort((a,b)=> a - b)


    arrayCopy.map((element, index) => {
        if(element == 'X'){
            arrayCopy[index] = toSort[counter];
            counter++;
        }

    })

    return arrayCopy;
}

console.log(solution(a2))
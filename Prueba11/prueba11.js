
const a = [50, 60, 60, 45, 70]


function solution(array) {

    let result = [0, 0]

    array.map((value, index) => {
        if (index % 2 !== 0) result[1] += value
        if (index % 2 === 0) result[0] += value
    })

    return result
}


console.log(solution(a))
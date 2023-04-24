

const inputArray = ["aba", "aa", "ad", "vcd", "aba"]


function solution(inputArray) {

    let largest = 0;
    let result = [];

    inputArray.map( element => {
        if(element.length > largest){
            largest = element.length;
        }
    } )

    inputArray.map( element => {
        if(element.length == largest){
            result.push(element)
        }
    } )

    return result
}



console.log(solution(inputArray))


//Ejercicio 1

const arr = [9, 5, '2', 'ab2', '3', -1, 'ab1']  // to be sorted
const arr2 = [-1, 1, 10000, '2', 'bgt', '3', 400, 5, 9, 'ab1', 'ab2', 'a1', 'c4', 'b2', 'a3']
// [-1, '2', '3', 5, 9, 'ab1', ab2']  // expected result
// #javascript #sort #alfanumeric

function sortAlfanumeric (array){ 
    let result = []

    arr.forEach(element => {
        result.push(element.toString())
    });

    return result.sort((a, b) => {
        if(a > b){
            return a - b
        }
        return a.localeCompare(b);
    })
}

console.log(sortAlfanumeric(arr2))



// Ejercicio 2

// Crear una function que permita y calcule la suma de sus argumentos de la siguiente forma

// function(2, 5)
// function(2)(5)

function sum(){

    if(arguments.length === 2){
        const [a, b] = arguments
        return a + b
    }else if(arguments.length === 1){
        const a = arguments[0]
        return function(b){
            return a + b
        }
    }

}

console.log(sum(3, 2))



// Ejercicio 3

// dado un array de ISO Dates en strings, y necesito obtener el min y max dada las fechas

const isoDates = ["2022-06-20T12:10:36-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:00-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00",
"2022-06-20T12:10:37-04:00","2022-06-01T22:12:12-04:00",
"2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00",
"2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00",
"2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00","2022-06-20T12:10:36-04:00","2022-06-01T22:12:12-04:00"]

function searchMinMax(array){

    result = []

    array.map( element => {
        if(!result.includes(Date.parse(element))){
            result.push(Date.parse(element))
        }
    })

    result.sort()

    return `Min isoDate: ${result[0]}  Max isoDate: ${result[result.length - 1]}`

}

console.log(searchMinMax(isoDates))
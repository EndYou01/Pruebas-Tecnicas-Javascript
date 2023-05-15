/**
Crea una funcion que convierta un número romano a decimal

Ejemplos:
romanoEntero("XVIII") //18
romanoEntero("CXX") //120

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
*/


function romanoEntero(romano) {

    let cantidad = 0

    const getValues = {
        'I': () => {
            return value = 1
        },
        'V': () => {
            return value = 5
        },
        'X': () => {
            return value = 10
        },
        'L': () => {
            return value = 50
        },
        'C': () => {
            return value = 100
        },
        'D': () => {
            return value = 500
        },
        'M': () => {
            return value = 1000
        },
    }

    function contador(value, nextValue) {
        if (arguments.length == 1) {
            cantidad += value;
            console.log('arguments == 1')
        }
        if (value >= nextValue) {
            cantidad += value
        }
        if (value < nextValue) {
            cantidad -= value
        }
    }

    romano.split("").map((element, index) => {
        if (index < romano.length - 1) {
            contador(getValues[element](), getValues[romano[index + 1]]())
        } else {
            contador(getValues[element]())
        }
    })

    return `El valor del numero romano ${romano}, es:  ${cantidad}`

}


console.log(romanoEntero("MCL"))

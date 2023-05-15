/**
 Crea una funcion a la cual le pase un array de numeros y un numero que sera el resultado de la suma de dos de los valores.

 Ejemplos:
 sumarDos([3, 7, 8, 2], 10) //[3, 7] (ambos suman 10)
 sumarDos([4, 5, 9, 1], 10) //[9, 1] 
 sumarDos([1, 2, 3, 4], 5) //[2, 3] 
 */

function sumarDos(array, meta) {
    let result = 'none'
    let index = 0
    while (index < array.length) {
        if (parseInt(array[index] + array[index + 1]) == meta) {
            result = `[${array[index]}, ${array[index + 1]}]`
            break
        }
        index++
    }
    return result
}


console.log(sumarDos([3, 7, 8, 2], 10))
console.log(sumarDos([4, 5, 9, 1], 10))
console.log(sumarDos([1, 2, 3, 4], 5))


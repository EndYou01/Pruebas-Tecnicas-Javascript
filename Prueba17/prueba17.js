
// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

const inputString = "abbcabb"


function solution(inputString) {

    const array = inputString.split("")

    if (array.legth <= 2) {
        return true
    }

    let letras = []
    let cantidades = []

    array.map(element => {
        if (!letras.includes(element)) {
            letras.push(element)
            cantidades.push(1)
        } else {
            cantidades[letras.indexOf(element)]++
        }
    })

    let impares = 0

    cantidades.map(element => {
        if (element % 2 != 0) {
            impares++
        } 
    })

    if (impares > 1) {
        return false
    }

    return true
}


console.log(solution('ababerr'))




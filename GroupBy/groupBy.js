/**
 *  Crear una funcion que permita agrupar un array, que puede
 *  ser de valores u objetos, a traves de una funcion o de una
 *  propiedad
 */





function groupBy(values, iteratee) {

    const obj = {}

    for (const value of values) {
        const key = typeof iteratee === 'function'
            ? iteratee(value)
            : value[iteratee]

        key in obj
            ? obj[key].push(value)
            : (obj[key] = [value])
    }

    return obj

}


console.log(
    groupBy([6.1, 4.2, 6.3], Math.floor)
)
console.log(
    groupBy(['one', 'two', 'three'], 'length')
)
console.log(
    groupBy([{ age: 23 }, { age: 24 }, 'age'], 'age')
)
console.log(
    groupBy([
        { title: 'Javascript: The Good Part', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 }
    ], 'rating')
)


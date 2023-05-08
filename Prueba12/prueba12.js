
const picture =
    ["abc",
        "ded"]

function solution(picture) {

    const columns = picture[0].length + 2

    const printAsterisks = amount => {
        let asterisks = ''
        let index = 0

        while (index < amount) {
            asterisks += '*'
            index++
        }

        return asterisks
    }

    let asteriskPicture = picture.map(element => {
        return '*' + element + '*'
    })



    let result = [printAsterisks(columns),
    ...asteriskPicture,
    printAsterisks(columns)]

    return result

}


console.log(solution(picture))
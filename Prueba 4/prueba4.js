
const sequence = [1, 2, 3, 4, 5, 3, 5, 6];
const sequence2 = [1, 2, 1, 2];


const sequence16 = [1, 2, 3, 4, 3, 6];
const sequence11 = [40, 50, 60, 10, 20, 30]
const sequence19 = [3, 5, 67, 98, 3]



function solution(sequence) {

    let controller1 = 0
    let controller2 = 0


    let firstError1 = 0

    sequence.map((element, index) => {
        console.log(element + ' element')

        if (element >= sequence[index + 1]) {
            controller1 ++;
            console.log("controller1 + 1     firstError == sequence")

            firstError1 = sequence[index - 1];
            console.log(element)

            if (firstError1 > sequence[index + 1] && (sequence[index + 1] == sequence[sequence.lenght - 1])) {
                controller1++;
                console.log("controller1 + 1     firstError == sequence")
            }
        }

        if (sequence[index - 1] >= sequence[index + 1]) {
            controller2++;
            console.log("controller2 + 1     sequence == sequence")
        }

    })

    if (controller1 >= 2 || controller2 >= 2) {
        return false
    }
    return true

}

console.log(solution(sequence16))
console.log("sequence16 Expected True")

console.log('-------------------------------------------------')
console.log(solution(sequence11))
console.log("sequence11 Expected False")


console.log('-------------------------------------------------')
console.log(solution(sequence19))
console.log("sequence19 Expected True")


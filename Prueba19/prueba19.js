


/**
  
The master launch sequence consists of several independent sequences for different systems. Your goal is to verify that all the individual system sequences are in strictly increasing order. In other words, for any two elements i and j (i < j) of the master launch sequence that belong to the same system (having systemNames[i] = systemNames[j]), their values should be in strictly increasing order (i.e. stepNumbers[i] < stepNumbers[j]).

Example

For systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"] and stepNumbers = [1, 10, 11, 2, 12, 111], the output should be
solution(systemNames, stepNumbers) = true.

There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [1, 2], [10, 12], and [11, 111], respectively. The elements are in strictly increasing order for all three.

For systemNames = ["stage_1", "stage_1", "stage_2", "dragon"] and stepNumbers = [2, 1, 12, 111], the output should be
solution(systemNames, stepNumbers) = false.

There are three independent sequences for systems "stage_1", "stage_2", and "dragon". These sequences are [2, 1], [12], and [111], respectively. In the first sequence, the elements are not ordered properly. */

// const systemNames = ["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"]
// const stepNumbers = [1, 10, 11, 2, 12, 111]

// const systemNames = ["stage_1", "stage_1", "stage_2", "dragon"]
// const stepNumbers = [2, 1, 12, 111]


const systemNames =
["Falcon 9", 
 "Falcon 9", 
 "Falcon 9", 
 "Falcon 9", 
 "Falcon 9", 
 "Falcon 9"]
 const stepNumbers = [1, 3, 5, 7, 7, 9]

function solution(systemNames, stepNumbers) {

    // let names = []
    // let numbers = []


    // for (let index = 0; index < systemNames.length; index++) {

    //     if (!names.includes(systemNames[index])) {
    //         names.push(systemNames[index])
    //         numbers.push(stepNumbers[index])
    //     } else {

    //         if (numbers[names.indexOf(systemNames[index])] >= stepNumbers[index]) {
    //             return false
    //         } else {
    //             numbers[names.indexOf(systemNames[index])] = stepNumbers[index]
    //         }
    //     }
    // }

    // return true

    const map = new Map();

    for (let i = 0; i < systemNames.length; i++) {
        const prevStepNumber = map.get(systemNames[i]);

        if (prevStepNumber && prevStepNumber >= stepNumbers[i]) {
            return false;
        }
        map.set(systemNames[i], stepNumbers[i]);
    }
    return true;
}


console.log(solution(systemNames, stepNumbers))



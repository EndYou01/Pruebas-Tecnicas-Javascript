// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// solution(name) = true;
// For name = "qq-q", the output should be
// solution(name) = false;
// For name = "2w2", the output should be
// solution(name) = false.

const name = "var_1__Int"

function solution(name) {

    const invalidDigits = [' ', '&', '.', '!', '[', ']', '(', ')', '-', '+', '=', '@', '$', '%']

    let result = true

    name.split("").map(e=>{
        if(invalidDigits.some( f => f == name[0]|| f == e )){
            result = false
        }
        if(name[0].match(/[0123456789]/)){
            result = false
        }
    })

    return result
}

console.log(solution(name))

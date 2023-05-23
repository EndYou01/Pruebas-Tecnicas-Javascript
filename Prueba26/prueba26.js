// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.

const n = 64223

function solution(n) {

    return !(n+'').split("").some( e => e%2!=0 )
    // return !(n.toString()).split("").some( e => e%2!=0 )

}

console.log(solution(n))


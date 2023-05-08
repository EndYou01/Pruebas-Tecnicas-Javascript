

const inputString = "foo(bar)baz(xyz)"
const inputString2 = "foo(bar(opa))baz(xyz)"

function solution(inputString) {

    let stack = [];

    for (let char of inputString) {
        if (char === ")") {
            let temp = "";
            while (stack[stack.length - 1] !== "(") {
                temp += stack.pop().split("").reverse().join("");
                console.log('temp '+temp)
            }
            stack.pop();
            stack.push(temp);
        } else {
            stack.push(char);
            console.log('stack.push(char) ' + stack)
        }
    }
    return stack.join("");
}


console.log(solution(inputString2))
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// solution(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// solution(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// solution(inputString) = false.

// There is no first number.

const inputString = "172.1.255.00"

function solution(inputString) {

    let result = true

    inputString.split(".").map(e => {

        e.split("").map(d => {

            if (d[0] == 0 && e.length >= 2) {
                result = false
            }

            if (!(parseInt(d) >= 0)) {
                result = false
            }
        })

        if (parseInt(e) > 255 || parseInt(e) < 0 || e == "" || inputString.split(".").length !== 4) {
            result = false
        }
    })

    return result

}

//Como saber si el valor de un string es un numero o una letra?

console.log(solution(inputString))

let n1 = 1230;
let n2 = 239017;

function solution(n) {

    let mitad1 = 0;
    let mitad2 = 0;

    let array = JSON.stringify(n).split("");
    
    for (let index = 0; index < array.length; index++) {
        if(index < (array.length/2)){
            mitad1 += parseInt(array[index]);
        }

        if(index >= (array.length/2)){
            mitad2 += parseInt(array[index]);
        }
    }

    if(mitad1 == mitad2){
        return true;
    }else{
        return false;
    }

}


console.log(solution(n2))

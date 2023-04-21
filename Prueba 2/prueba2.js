function solution(inputString) {
    let splitString = inputString.split("");   
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join("")
    
    if(joinArray == inputString){
        return true
    }else{
        return false
    }
}
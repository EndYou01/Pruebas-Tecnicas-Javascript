
const statues = [5, 4, 6]


const solution = (statues) => {

    statues.sort((a, b) => a - b)

    const midleStatues = statues[statues.length - 1] - statues[0] - 1;
    //2

    if(midleStatues <= 0 ){
        return 0
    }


    const nStatues = statues[statues.length - 1] - statues[0] + 1;
    //4

    if( nStatues - midleStatues == midleStatues - 1){
        return 0
    }


    return midleStatues - (statues.length - 2)

}

console.log(solution(statues))
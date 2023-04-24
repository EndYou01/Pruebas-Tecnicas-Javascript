
const s1 = "aabcc";
const s2 = "adcaa";

function solution(s1, s2) {

    let commonChars = 0;

    for (let i = 0; i < s1.length; i++) {
      const index = s2.indexOf(s1[i]);
      if (index !== -1) {
        commonChars++;
        s2 = s2.slice(0, index) + s2.slice(index + 1);
      }
    }


    return commonChars;
    
}


console.log(solution(s1, s2) )
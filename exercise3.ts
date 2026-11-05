// <p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
// <p>What is the largest prime factor of the number $600851475143$?</p>


const findOddMultiple= (num:number):number => {
    if(num==1){
        return 1;
    }
    let alpha:number=3;
    for(let i=3;num%alpha;i+=2){
        alpha+=2;
    }
    return alpha;
}

const getPrimeFactors = (num:number):number[] => {
    if(num==1){
        return [1];
    } else if(num%2==0){
        return [2,...getPrimeFactors(num/2)];
    } else {
        let m = findOddMultiple(num);
        if(m==num){
            return [num]
        } else {
            return [...getPrimeFactors(m),...getPrimeFactors(num/m)]
        }
    }
}

const ex3 = (num:number):number => {
    const primeFactors = getPrimeFactors(num);
    return Math.max(...primeFactors)
}

console.log(ex3(600851475143)) //6857

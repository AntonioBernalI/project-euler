// <p>By listing the first six prime numbers: $2, 3, 5, 7, 11$, and $13$, we can see that the $6$th prime is $13$.</p>
// <p>What is the $10\,001$st prime number?</p>

const isNumPrime = (num:number):boolean =>{
    if(num%2==0 || num==1){
        return false;
    } else{
        let isPrime:boolean=true;
        for(let i=3;i<=Math.sqrt(num);i+=2){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        return isPrime;
    }
}

const ex7 = (num:number):number=>{
    let primes:number[] = [2];
    for(let i=1;primes.length<=num;i++){
        if(isNumPrime(i)){
            primes.push(i);
        }
    }
    return primes[num-1];
}

console.log(ex7(10001))
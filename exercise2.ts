const ex2 = ():number => {
    let epsilon:number=0;
    let sum:number = 0;
    const fibonacci = (num: number):number => {
        if (num <= 1) {
            return 1;
        } else{
            return fibonacci(num-1) + fibonacci(num-2);
        }
    }
    for (let i = 1; fibonacci(i)<4e6; i++) {
        epsilon = i;
    }
    for (let i = 1; i <= epsilon; i++) {
        if (fibonacci(i)%2==0) {
            sum += fibonacci(i);
        }
    }
    return sum;
}

console.log(ex2());
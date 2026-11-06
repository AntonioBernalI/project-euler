// <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.</p>
// <p>Find the largest palindrome made from the product of two $3$-digit numbers.</p>

type ConditionThreeArray = [number, number, number,number, number, number][];

const createNumberByDigits = (digits:[number,number,number]) => {
    return 100*digits[0]+ 10*digits[1] + digits[2];
}

const getConditionThreeArray = ():ConditionThreeArray => {
    let CTA:ConditionThreeArray = [];
    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 0; d <= 9; d++) {
                    for (let e = 0; e <= 9; e++) {
                        for (let f = 0; f <= 9; f++) {
                            if (
                                (a*f + b*e + c*d < 10)&&
                                (a*e + b*d < 10)&&
                                (b*f + c*e < 10)&&
                                (c*f < 10)&&
                                (a*d < 10)
                            ){
                                CTA.push([a,b,c,d,e,f]);
                            }
                        }
                    }
                }
            }
        }
    }
    return CTA;
}

let cThreeArr:ConditionThreeArray = getConditionThreeArray();

const getConditionTwoArray = (CTA: ConditionThreeArray): ConditionThreeArray => {
    return CTA.filter(row => {
        const [a, b, c, d, e, f] = row;

        const leftSide = createNumberByDigits([a, b, c]) * createNumberByDigits([d, e, f]);
        const rightSide = createNumberByDigits([f, e, d]) * createNumberByDigits([c, b, a]);


        return (leftSide === rightSide)&&(createNumberByDigits([a, b, c])>=100 && createNumberByDigits([d, e, f])>=100);
    });
};

let cTwoArr = getConditionTwoArray(cThreeArr)


const getConditionOneArray = (CTA: ConditionThreeArray): number[] => {
    return CTA
        .map((row) => {
            const [a, b, c, d, e, f] = row;
            return createNumberByDigits([a, b, c]) * createNumberByDigits([d, e, f]);
        })
};


let cOneArr = getConditionOneArray(cTwoArr)
console.log(JSON.stringify(cOneArr, null, 2));





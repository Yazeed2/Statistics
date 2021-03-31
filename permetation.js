const factorial =(n) => { 

    if (n<= 1){ 
        return 1
    }else{ 
        return n * factorial(n-1)
    }
}

const firstRule = (n, r) => { 
    const permutation = factorial(n) / factorial(n-r)

    console.log('permutation 1 = ', permutation, '👍')
    return permutation
}

const secondRule = (n, rArr) => { 
    let r = 1
    rArr.forEach(element => {
        r *= factorial(element)
    });
    const permutation2 = factorial(n)/r
    console.log('permutation 2 = ', permutation2, '👍')
    return permutation2

}
const combinations = (n, r) => { 
    let comb = factorial(n)/ (factorial(n-r) * factorial(r))
    console.log('combinations = ', comb, '👍')
    return comb
}
// secondRule(6, [1,1,1,1,1, 1])
// firstRule(6,6)
// console.log(combinations(6, 4) * combinations(8, 4) )

combinations(14,5)
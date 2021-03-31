const dataToArr = (data) => {
data = data.split(',') 
data = data.map(elm => parseInt(elm))
return data
}

var data = {
    x: dataToArr('12, 23, 32, 45, 54, 62'),  
    y: dataToArr(' 74, 36, 42, 59, 61, 22')
}


const sort = arr => arr.sort(function(a, b){return a - b});

var dataOrdered = {x: sort([...data.x]), y:sort([...data.y])}



const sameCount = (num, arr) => { 
    arr = arr.filter(n => n === num).length
    return arr
}
const avgRank = (rank, rep)=> { 
    let high = rank + rep -1
    let sum = (rep/2) * (high + rank)
    return sum / rep
}

for(axis in data){ 
    data[axis] = data[axis].map(el => {
        let ord = dataOrdered[axis].indexOf(el)+1
        let rank = avgRank(ord, sameCount(el, dataOrdered[axis]))
        return {val: el, rank }
    
    })

}
let diff = []
data.x.forEach((el, i) => {
    diff.push(el.rank - data.y[i].rank) 
});

diff = diff.map(a=> a**2) 

let n = data.x.length
let sumDiff = diff.reduce((a, b) => a + b, 0)
let r = 1 - ((6* sumDiff)/ (n*(n**2-1)))

console.log('spearman rank correlation =' ,r , '  👍')




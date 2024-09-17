const data = [1,2,3,4,5,6,7,8]

const subdata = data.filter(v => v >= 5)
const odddata = data.filter(v => v % 2 != 0)

console.log(subdata)
console.log(odddata)
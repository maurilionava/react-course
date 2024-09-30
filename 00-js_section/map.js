const datamap = [1,2,3,4,5]

data1 = datamap.map(v => v * 2)

console.log(datamap)
console.log(data1)

const objectarray = [
    { name: 'Joe', country: 'Australia' },
    { name: 'Mary Doe', country: 'New Zealand' }
]

objectarray.map(object => {
    object.test = true
})

console.log(objectarray)


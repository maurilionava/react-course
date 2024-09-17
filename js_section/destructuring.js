const data01 = [1,2,3,4,5]
const [a1, a2, a3] = data01

console.log(a1)
console.log(a2)
console.log(a3)

const data02 = [{ name: 'John Doe', country: 'Australia' },
    { name: 'Mary Doe', country: 'New Zealand' }
 ]

const {name: b1, country: b2} = data02[0]

console.log(b1)
console.log(b2)

const template_litaral = `${b1} is from ${b2}`
console.log(template_litaral)

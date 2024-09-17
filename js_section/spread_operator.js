const array01 = [1,2,3,4,5]
const array02 = [6,7,8,9,10]

const array03 = [...array01, ...array02]

console.log(array03);

const carName = { name: 'Celta' }
const carBrand = { brand: 'Chevrolet' }
const carKm = { km: 249000 }

const carObject = {...carName, ...carBrand, ...carKm}

console.log(carObject)
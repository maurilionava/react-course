/* escopo de variáveis */
let a = 1

if(true){
    let a = 2
    console.log(`let 'a' inside loop = ${a}`)
}
console.log(`let 'a' outside loop = ${a}`)

const b = 3

if(true){
    const b = 4
    console.log(`const 'b' inside loop = ${b}`)
}
console.log(`const 'b' outside loop = ${b}`)

var c = 5
 if(true){
    var c = 6
    console.log(`var 'c' inside loop = ${c}`)
 }
 console.log(`var 'c' outside loop = ${c}`)
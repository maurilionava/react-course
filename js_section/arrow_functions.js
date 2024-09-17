const soma = function (a, b) {
    console.log(a + b)
}

const somaArrow = (a, b) => {
    console.log(a + b)
}

const logStatusCode = (statusCode) => {
    console.log(statusCode)
}

const log = () => console.log('mensagem')

const user = {
    name: 'xpto',
    sayUserName() {
        var self = this
        setTimeout(() => {
            console.log(self)
            console.log(self.name)
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
}

soma(1,2)
somaArrow(1,2)
logStatusCode(200)
log()

user.sayUserName()
user.sayUserNameArrow()
class Father {
    constructor(name, country, age) {
        this.name = name
        this.country = country
        this.age = age
    }

    birthYear() {
        const birthYear = 2024 - this.age
        console.log(birthYear)
    }
}

const person = new Father('John Doe', 'Australia', 30)
person.birthYear()

class Son extends Father {
    constructor(name, country, age, gamesList){
        super(name, country, age)
        this.gamesList = gamesList
    }

    showGames() {
        console.log('Games List:')
        this.gamesList.forEach(game => {
            console.log(game)
        });
    }
}

const son01 = new Son('John Doe', 'Australia', 18, ['The Last of Us', 'Borderlands', 'Grand Theft Auto IV'])
son01.showGames()
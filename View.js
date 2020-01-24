class View {
    static show(message) {
        console.log('==============================BOOKST0RE=============================')
        for(let i = 0; i < message.length; i++) {
            console.log(`No: ${i+1},
            id: ${message[i].id}
            Nama: ${message[i].name}, 
            Username: ${message[i].username},
            Password: ${message[i].password}, 
            Saldo: ${message[i].saldo},
            Status: ${message[i].status}`)
            console.log('___________________________________________')
        }
    }

    static chart(message) {
        console.log('==============================BOOKST0RE=============================')
        for(let i = 0; i < message.length; i++) {
            console.log(`No: ${i+1},
            id: ${message[i].id}
            Nama: ${message[i].name}, 
            price: ${message[i].price},
            qtt: ${message[i].qtt}`)
            console.log('___________________________________________')
        }
    }

    static buku(message) {
        for(let i = 0; i < message.length; i++) {
            console.log(`No: ${i+1},
            id: ${message[i].id},
            name: ${message[i].name},
            price: ${message[i].price},
            qtt: ${message[i].qtt}`)
        }
    }

    static profil(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(`No: ${1},
        id: ${message.id}
        Nama: ${message.name}, 
        Username: ${message.username}, 
        Saldo: ${message.saldo},`)
        console.log('___________________________________________')
    }

    static buy(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }

    static create(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }

    static delete(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }
    
    static update(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }

    static login(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }

    static logout(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }

    static topup(message) {
        console.log('==============================BOOKST0RE=============================')
        console.log(message)
    }
}

module.exports = View;
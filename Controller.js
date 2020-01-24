const Model = require('./Model');
const View = require('./View')

class Controller {
    static show(name){
        Model.show(name)
            .then(message => {
                if (name === 'buku') {
                    View.buku(message)
                } else if (name === 'profil') {
                    View.profil(message)
                } else if (name === 'chart') {
                    View.chart(message)
                } else {
                    View.show(message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    static create(name,username,password) {
        Model.create(name,username,password)
            .then(message => {
                View.create(message);
            }).catch(err => {
                console.log(err)
            })
    }

    static delete(username) {
        Model.delete(username)
            .then(message => {
                View.delete(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static update(id,name,username,password) {
        Model.update(id,name,username,password)
            .then(message => {
                View.update(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static login(username, password) {
        Model.login(username,password)
            .then(message => {
                View.login(message)
            }).catch(err => {
                console.log(err)
            })
            
    }

    static logout() {
        Model.logout()
            .then(message => {
                View.logout(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static topup(nominal) {
        Model.topup(nominal)
            .then(message => {
                View.topup(message)
            }).catch(err => {
                console.log(err)
            })
    }

    static buy(id, qtt) {
        Model.buy(id, qtt)
            .catch(message => {
                View.buy(message)
            }).catch(err => {
                console.log(message)
            })
    }
}

module.exports = Controller;
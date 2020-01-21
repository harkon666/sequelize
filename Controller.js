const Model = require('./Model');
const View = require('./View')

class Controller {
    static show(){
        Model.show()
            .then(message => {
                View.show(message)
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
}

module.exports = Controller;
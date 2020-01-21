const models = require('./models');
const Sequelize = require('sequelize')

class Model {
    static show() {
        return new Promise((resolve, reject) => {
            models.Users.findAll({raw: true}).then(users  => {
                resolve(users)
            })
        })
    }

    static create(name,username,password) {
        return new Promise((resolve, reject) => {
            if (name === undefined || username === undefined, password === undefined) {
                reject('gagal')
            } else {
            models.Users.create({name: name, username: username, password: password})
                .then(newUser => {
                    resolve('user baru telah dibuat')
                })
            }
        })
    }

    static delete(username) {
        return new Promise((resolve, reject) => {
            if (username === undefined) {
                reject('gagal')
            } else {
                models.Users.destroy({where: {
                    username: username
                }}).then(() => {
                    resolve('user telah dihapus')
                })
            }
        })
    }

    static update(id,name,username,password) {
        return new Promise((resolve,reject) => {
            if (id === undefined) {
                reject('gagal')
            } else {
                models.Users.update({
                    name: name,
                    username: username,
                    password: password
                },{where : {
                    id: id
                }}).then(() => {
                    resolve('berhasil update data')
                })
            }
        })
    }
}

module.exports = Model;
const models = require('./models');
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

class Model {

    static show(name) {
        return new Promise((resolve, reject) => {
            if (name === 'buku') {
                models.Buku.findAll({raw: true}).then(users  => {
                    resolve(users)
                })
            } else if (name === 'profil') {
                models.Users.findOne({raw:true, where: {status: "true"}}).then(users  => {
                    resolve(users)
                })
            } else if (name === 'chart') {
                models.Chart.findAll({raw: true}).then(data => {
                    resolve(data)
                })
            } else {
                models.Users.findAll({raw: true}).then(users  => {
                    resolve(users)
                })
            }
        })
    }

    static create(name,username,password) {
        return new Promise((resolve, reject) => {
            if (name === undefined || username === undefined, password === undefined) {
                reject('gagal')
            } else {
            models.Users.create({name: name, username: username, password: password, saldo: 0})
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
                    password: bcrypt.hashSync(password, 10)
                },{where : {
                    id: id
                }}).then(() => {
                    resolve('berhasil update data')
                })
            }
        })
    }

    static logout() {
        return new Promise((resolve, reject) => {
            models.Chart.findAll({raw: true}).then(chart => {
                let arr = []
                
                models.Buku.findAll({raw: true}).then(data => {
                    for (let i = 0; i < data.length; i++) {
                        let total = 0
                        let temp = []
                        total += chart[i].qtt
                        temp.push(chart[i].name)
                        temp.push(total)
                        arr.push(temp)
                    }
                    
                    for(let j = 0; j < arr.length; j++) {
                        models.Buku.update({
                            qtt: data[0].qtt + arr[j][1] 
                        }, {where: {
                            name: arr[j][0]
                        }})
                    }

                    models.Chart.destroy({
                        where: {},
                        truncate: true
                      });
                })
                console.log(arr)
            })
            
              
            models.Users.update({status: false},{where:{status: '1'}})
                .then(() => resolve('Log-out success, thank you'))
        })
    }
    
    static login(username, password) {
        return new Promise((resolve,reject) => {
            models.Users.findOne({where: {username: username}}).then(async (user) => {
                if (!user) {
                    reject('Wrong User');
                } else if (!await user.validPassword(password)) {
                    reject('wrong password');
                } else {
                    models.Users.update({status: true},{where:{username: username}}).then(() => {
                        resolve('welcome')
                    })
                }
            })
        })
    }

    static topup(nominal) {
        return new Promise((resolve, reject) => {
            models.Users.update({saldo: nominal},{where:{status: true}})
                .then(() => {
                    if (nominal < 0) {
                        reject('input true nominal')
                    } else {
                        resolve('thanks for topup')
                    }
                } )
        })
    }

    static buy(id, qtt) {
        return new Promise((resolve, reject) => {
            models.Buku.findOne({raw: true, where: {id: id}})
                .then(data => {
                    models.Chart.create({
                        name: data.name,
                        price: data.price,
                        qtt: qtt
                    })

                    if(!data) {
                        models.Chart.destroy({
                            where: {
                                name: data.name
                            }
                        })
                        reject('buku tidak tersedia')
                    } else {
                        models.Buku.update({
                            qtt: data.qtt - qtt
                        },
                        {
                            where: {
                                id: data.id
                            }
                        })
                        resolve('buku tersedia')
                    }
                })
        })
    }

    static final() {}

}

module.exports = Model;
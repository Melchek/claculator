const mongoose = require('mongoose')

class Transaction extends mongoose.Schema {
    constructor () {
        super({
            name: String,
            kolel: String,
            amount: Number,
            comment: String,
            time : Date
        }, {collection: 'tansactions'})
    }
}

module.exports = mongoose.model('Transactions', new Transaction())
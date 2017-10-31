const Transaction = require('./../models/transaction.model')

function getByKolel(kolelId) {
    return Transaction.find({kolel:kolelId})
}

module.exports = {
    getByKolel: getByKolel
}
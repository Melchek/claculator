const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

function connect(config) {
    const mongoUri = `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.db}?authSource=${config.auth}`

    // return mongoose.connect(mongoUri, {server: { socketOptions: {keepalive: 1}}});
    return Promise.resolve();
}

module.exports = {
    connect: connect
}
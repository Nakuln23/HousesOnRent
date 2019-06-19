if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod')
} else {
    module.exports = require('./keys_dev')
}

    // "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

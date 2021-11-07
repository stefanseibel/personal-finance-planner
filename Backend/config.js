const keys = require('./keys');

module.exports = {

    server: {
        port: process.env.SERVER_PORT || 3001,
        name: 'Personal Finance Planner-Backend',
        prefix: '[PFP]',
        divider: '--------------------'
    },

    database: {
        sql: {
            host: 'localhost',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || keys.database.sql.password,
            database: 'personalfinanceplanner',
            socketPath: process.env.IS_MAC ? '/Applications/MAMP/tmp/mysql/mysql.sock' : ''
        }
    },
    jwt: {
        key: keys.jwt.key
    },
    yahoofinanceapi: {
        key: keys.yahoofinanceapi.key
    }
}
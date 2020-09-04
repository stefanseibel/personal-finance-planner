module.exports = {

    server: {
        port: process.env.SERVER_PORT || 3000,
        name: 'Personal Finance Planner-Backend',
        prefix: '[PFP]',
        divider: '--------------------'
    },

    database: {
        sql: {
            host: 'localhost',
            port: process.env.MYSQL_PORT || 3306,
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: 'personalfinanceplanner',
            socketPath: process.env.IS_MAC ? '/Applications/MAMP/tmp/mysql/mysql.sock' : ''
        }
    },
    jwt: {
        key: "oPdcRMXIzMUgv5ws"
    }
}
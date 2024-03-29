const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('../config');
const cors = require('cors')
const app = express();
const http = require('http').createServer(app);

const API = require('./api/main');

const connection = mysql.createConnection(config.database.sql);
connection.connect();

module.exports.SQL_DATABASE = connection;

app.use(bodyParser.urlencoded({ extended: true }));

try{
    app.use(bodyParser.json());
} catch(e){
    app.use((req,res) => {
        res.status(400).json({
            success: false,
            error: e
        });
    });
}

app.use(cors())

app.use('/api', API);

//TODO: move to seperate file
module.exports.SQL_PROMISE = async function(res, query, vars = [], defaultErrHandling = true){
    return new Promise((resolve, reject) => {
        connection.query(query, vars, (err, result) => {
            if (err) {
                if (defaultErrHandling) return res.status(500).json({err: err});
                reject(err);
            }
            resolve(result);
        })
    });
}

http.listen(config.server.port, () => {
    console.log(`${ config.server.prefix } Service \“${ config.server.name }\“ is launching...`);
    console.log(`${ config.server.prefix } Server is running on port ${ config.server.port }.`)
});

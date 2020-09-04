const query = require("../../../index").SQL_PROMISE;
const config = require("../../../../config");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const route = async (req, res) => {
    
    const mail = req.body.mail;
    const password = req.body.password;
    const name = req.body.name;
    const salt = generateSalt(16);
    const hashPW = crypto.createHash('md5').update(salt + password).digest("hex");

    if (mail && password && name) {
        const id = (await query(res, "INSERT INTO user (mail, md5hash, salt, name) VALUES (?,?,?,?)",[mail, hashPW, salt, name])).insertId;
        const token = jwt.sign({
            mail: mail,
            id: id
            //isAdmin: 0
        },config.jwt.key, {
            expiresIn: "10d"
        });

        return res.status(201).json({
            token: token
        });
    } else {
        return res.sendStatus(400);
    }
}

function generateSalt(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = route;
const query = require("../../../index").SQL_PROMISE;
const config = require("../../../../config");
var crypto = require('crypto');
const jwt = require('jsonwebtoken');

const route = async (req, res) => {
    
    const mail = req.body.mail;
    const password = req.body.password;

    if (mail && password) {
        const pwData = (await query(res, "SELECT * FROM user WHERE mail = ?",[mail]))[0];

        const hashPW = crypto.createHash('md5').update(pwData.salt + password).digest("hex");

        if(hashPW === pwData.md5hash){

            const token = jwt.sign({
                mail: mail,
                id: pwData.id
                //isAdmin: Boolean(result[0].isAdmin)
            },config.jwt.key);//, {
                //expiresIn: "10d"
            //});

            return res.status(200).json({
                token: token,
                name: pwData.name,
                mail: mail
            });
        }

        return res.sendStatus(401);

    } else {
        return res.sendStatus(400);
    }
}
module.exports = route;
const jwt = require('jsonwebtoken');
const config = require("../../../config");

module.exports = (req,res, next) => {

    try{
        const decoded = jwt.verify(req.body.token, config.jwt.key);
        req.userData = decoded;
        next();
    } catch (err) {
        res.sendStatus(403);
    }
};
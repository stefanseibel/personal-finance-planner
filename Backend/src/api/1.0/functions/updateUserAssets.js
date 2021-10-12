const sql = require("../../../utils/sqlUtils");


const route = async (req, res) => {
    
    const symbol = req.body.symbol;
    const amount = req.body.amount;
    const id = req.body.id;
    const userId = req.userData.id;
    //TODO error if id doesnt match userid
    await sql.update(res,'userasset', ['symbol','amount'],[symbol,amount], ['id','userId'], [id, userId]);
    res.sendStatus(200);
}

module.exports = route;
const query = require("../../../index").SQL_PROMISE;

const route = async (req, res) => {
    
    const symbol = req.body.name;
    const amount = req.body.amount;
    const userId = req.userData.id;

    if (symbol && !isNaN(amount)) {
        await query(res, "INSERT INTO budgetitem (userId, symbol, amount) VALUES (?,?,?,?)",[userId, symbol, amount]);
        return res.sendStatus(201);
    } else {
        return res.sendStatus(400);
    }
}

module.exports = route;
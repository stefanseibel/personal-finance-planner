const query = require("../../../index").SQL_PROMISE;

const route = async (req, res) => {
    
    const name = req.body.name;
    const category = req.body.category;
    const userId = req.body.userId;
    const amount = req.body.amount;

    if (name && category && Number.isInteger(userId) && !isNaN(amount)) {
        await query(res, "INSERT INTO budgetitem (userId, name, category, amount) VALUES (?,?,?,?)",[userId, name, category, amount]);
        return res.sendStatus(201);
    } else {
        return res.sendStatus(400);
    }
}

module.exports = route;
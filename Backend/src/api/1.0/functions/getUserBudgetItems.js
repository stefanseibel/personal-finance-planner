const query = require("../../../index").SQL_PROMISE;

const route = async (req, res) => {
    
    let userId = req.query.userId;
    
    if (!isNaN(userId)) {
        userId = Number.parseInt(userId);
        
        const result = await query(res, "SELECT * FROM budgetitem WHERE userId = ?",[userId]);
        return res.status(200).json(result);
    } else {
        return res.sendStatus(400);
    }
}

module.exports = route;
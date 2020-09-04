const sql = require("../../../utils/sqlUtils");


const route = async (req, res) => {
    
    const name = req.body.name;
    const category = req.body.category;
    const amount = req.body.amount;
    const id = req.body.id;
    const userId = req.userData.id;
    //TODO error if id doesnt match userid
    await sql.update(res,'budgetitem', ['name','category','amount'],[name,category,amount], ['id','userId'], [id, userId]);
    res.sendStatus(200);
}

module.exports = route;
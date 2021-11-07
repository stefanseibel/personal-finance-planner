const query = require("../../../index").SQL_PROMISE;

const route = async (req, res) => {
    
    const id = req.body.id;
    const userId = req.userData.id;
    
    if (id) {
        await query(res, "DELETE FROM userasset WHERE userId = ? AND id = ?",[userId,id]);
        return res.sendStatus(200);
    } else {
        return res.sendStatus(400);
    }
}

module.exports = route;
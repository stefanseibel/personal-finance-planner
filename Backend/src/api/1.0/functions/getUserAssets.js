const query = require("../../../index").SQL_PROMISE;

const route = async (req, res) => {
    
    let userId = req.userData.id;
    
    userId = Number.parseInt(userId);
        
    const result = await query(res, "SELECT * FROM userasset WHERE userId = ?",[userId]);
    return res.status(200).json(result);
}

module.exports = route;
const query = require("../../../index").SQL_PROMISE;
const axios = require("axios").default;

const getUserAssetData = async (userId,res) => {
        
    const sql = await query(res, "SELECT * FROM userasset WHERE userId = ?",[userId]);
    let queries = sql.map(x => axios.get(`https://query2.finance.yahoo.com/v7/finance/quote?symbols=${x.symbol}`,
        { headers: {'user-agent': 'Mozilla/5.0'}}));
    
    const responses = await axios.all(queries);

    const responseData = responses.map(x => x.data.quoteResponse.result[0]);
    return responseData;
}

const route = async (req, res) => {
    
    let userId = req.userData.id;
    
    userId = Number.parseInt(userId);
    
    const result = Array.from(await query(res, "SELECT * FROM userasset WHERE userId = ?",[userId]));
    const userAssetData = Array.from(await getUserAssetData(userId, res));

    const groupedResult = {}
    result.map(x => {
        groupedResult[x.symbol] = {}
        groupedResult[x.symbol].data = x;
    });

    //Usually a forex pair e.g. USD/EUR is shown/sent as 'EUR=X', but SOMETIMES it is sent as 'USDEUR=X', this tries to correct it
    //Can't rule out that it happens for other things too
    userAssetData.map(x => {
        let symbol = x.symbol;
        if (symbol.length === 8 && symbol.slice(0,3) === 'USD' && symbol.slice(6) == '=X'){
            symbol = symbol.slice(3);
        }
        x.symbol = symbol;
        groupedResult[symbol].additionalData = x;
    });

    const finalResult = Object.keys(groupedResult).map(x => { 
        return { 
            data: groupedResult[x].data, 
            additionalData: groupedResult[x].additionalData
        }
    });
    return res.status(200).json(finalResult);
    
}

module.exports = route;
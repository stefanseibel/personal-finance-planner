const query = require("../../../index").SQL_PROMISE;
const config = require("../../../../config");
const axios = require("axios").default;

const route = async (req, res) => {
    
    let userId = req.userData.id;
    
    userId = Number.parseInt(userId);
        
    const sql = await query(res, "SELECT * FROM userasset WHERE userId = ?",[userId]);
    let symbols = sql.map(x => x.symbol).toString();

    const options = {
        method: 'GET',
        url: `https://rest.yahoofinanceapi.com/v6/finance/quote?symbols=${symbols}`,
        //params: {modules: 'defaultKeyStatistics,assetProfile'},
        headers: {
            'x-api-key': config.yahoofinanceapi.key
        }
    };

    axios.request(options).then(function (response) {
        return res.status(200).json(response.data.quoteResponse.result.map(x => {
            return {symbol: x.symbol, price: x.regularMarketPrice, currency: x.currency, exchange: x.exchange}
        }));
    }).catch(function (error) {
        return res.status(500).json(error);
    });
}

module.exports = route;
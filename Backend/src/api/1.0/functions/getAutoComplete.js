const axios = require("axios").default;

const route = async (req, res) => {
    
    const input = req.query.input;

    if (input){
        const options = {
            method: 'GET',
            url: `https://query2.finance.yahoo.com/v1/finance/search?q=${input}&newsCount=0`
        };

        axios.request(options).then(function (response) {
            return res.status(200).json(response.data.quotes);
        }).catch(function (error) {
            return res.status(500).json(error);
        });
    } else {
        return res.sendStatus(400);
    }
}

module.exports = route;
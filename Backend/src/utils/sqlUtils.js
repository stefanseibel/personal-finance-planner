const sql = require("../index").SQL_PROMISE;
const mysql = require("mysql");

module.exports.update = async (res, table, columns, values, WHEREColumn, WHEREValue) => {

    let counter = 0;

    while(counter < columns.length){
        
        if(values[counter] === undefined){
            columns.splice(counter,1);
            values.splice(counter,1);
        } else {
            counter += 1
        }
    }

    if(values.length === 0){
        return res.sendStatus(400);
    }

    var sets = columns.map((element,index) => `${element} = \"${values[index]}\" `).join(', ');

    var query = `UPDATE ${table} SET ${sets} WHERE ${WHEREColumn} = ${WHEREValue}`;
    return sql(res, query);
}
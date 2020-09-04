const sql = require("../index").SQL_PROMISE;
const mysql = require("mysql");

module.exports.update = async (res, table, columns, values, WHEREColumns, WHEREValues) => {

    let counter = 0;

    while(counter < columns.length){
        
        if(values[counter] === undefined){
            columns.splice(counter,1);
            values.splice(counter,1);
        } else {
            counter += 1
        }
    }

    if(values.length === 0 || WHEREValues.some(x=>x===undefined)){
        return res.sendStatus(400);
    }

    var sets = columns.map((element,index) => `${element} = \"${values[index]}\" `).join(', ');

    var whereSets = WHEREColumns.map((element,index) => `${element} = \"${WHEREValues[index]}\" `).join(' AND ');

    var query = `UPDATE ${table} SET ${sets} WHERE ${whereSets}`;
    return sql(res, query);
}
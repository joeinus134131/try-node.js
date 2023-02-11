const conn = require("../config.js");

module.exports = function Flower(){
    this.getDeals = function(callback){
        let sql = "SELECT * FROM flower INNER JOIN deals ON flower.id = deals.flower_id";
        conn.query(sql, callback)
    }
}
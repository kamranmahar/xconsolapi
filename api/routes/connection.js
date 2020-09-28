const mysql = require("mysql");
var mySqlConnection = mysql.createConnection({
    host : "104.197.182.25",
    user :"root",
    password : "Kamran@1234",
    database : "Trango",
    multipleStatements : true
});

mySqlConnection.connect((err) => {
    if(!err){
        console.log("Connected");
    }else
    {
        console.log(err);
    }

});

module.exports = mySqlConnection;
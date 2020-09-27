const mysql = require("mysql");
var mySqlConnection = mysql.createConnection({
    host : "localhost",
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
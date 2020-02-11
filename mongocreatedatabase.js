var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase";  
MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {  
if (err) {throw err;
}else{
console.log("Database created!");  
db.close();  
}});  
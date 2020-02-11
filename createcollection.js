var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useUnifiedTopology: true } ,function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Create a collection name "customers":
  dbo.createCollection("hollymovies", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

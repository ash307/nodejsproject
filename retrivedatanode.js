var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Find all documents in the customers collection:
  dbo.collection("hollymovies").find({ }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

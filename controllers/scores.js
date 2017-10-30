

module.exports = (req, res, next) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://admin:1312%401312aA@cluster0-shard-00-00-1jt1t.mongodb.net:27017,cluster0-shard-00-01-1jt1t.mongodb.net:27017,cluster0-shard-00-02-1jt1t.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("scores").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
    });
  });
};
var http= require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){

    if(req.method == "GET"){
        res.writeHead(2000, {"content-Type": "text/html"});
        fs.createReadStream("./FIRST_APP/form.html","UTF-8").pipe(res);


    }else if(req.method == "POST"){
        var data = "";
        req.on("data", function(chunk){
            data += chunk;
        });
        req.on("end", function(){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end('${data}');
        });
        
    }
});
server.listen(3000);
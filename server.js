//Importei um pacote http
var http = require('http')


http.createServer(function(req,res){
    res.end("Jonas Cappi");
    console.log("Amo minha noiva Hindriele")
}).listen(3000)
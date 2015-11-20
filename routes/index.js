var express      = require('express');
var router       = express.Router();
var fs           = require('fs');
var Converter    = require("csvtojson").Converter;


var csvConverter = new Converter();

router.get('/data', function(req, res, next) {

  csvConverter.on("end_parsed", function(data){
    console.log(data);
    res.json(data);
  });

  console.log("request");
  //read from file
  fs.createReadStream(__dirname + '/../data').pipe(csvConverter);


});

module.exports = router;

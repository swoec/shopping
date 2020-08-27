var express = require('express');
var app = express();
var fs = require("fs");
const path = require('path');
var bodyParser = require('body-parser');
var multer  = require('multer');
var stripe = require('stripe')('secret');


app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// store files in two directories for safety.directories:/home/alex/tmp,__dirname/files/
app.use(multer({ dest: '/home/alex/tmp/'}).array('fileUploader'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/token', function(req, res){


    let payments = req.body;
    stripe.charges.create({
        amount:payments.amount,
        currency:"usd",
        source:payments.id,
        description: JSON.stringify(payments.description)
    },function (err, charge) {
        if(!charge){
            return  res.send({email:"charge failed"});
        }

        res.send({email:"ss@gmail.com"});

    });


});



var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("access link is  http://%s:%s", host, port)

})

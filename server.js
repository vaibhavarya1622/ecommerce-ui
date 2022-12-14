const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
var bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//here we are configuring dist to serve app files
app.use('/',serveStatic(path.join(__dirname,'/dist')))

//this * route is to serve project on different pages routes except root '/'
app.get(/.*/,function(req,res){
    res.sendFile(path.join(__dirname,'/dist/index.html'))
})

const port = process.env.PORT || 8081
app.listen(port)
console.log(`app is listening on port: ${port}`)
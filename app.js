var express = require("express");
var app = express();
var post = process.env.post || 3000;

// cau hinh ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(post, function(){
    console.log("Server is running ...");
});

app.get("/", function(req, res){
    res.render("trangchu");
});
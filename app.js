var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    router     = express.Router()

mongoose.connect("mongodb://localhost/_ang");
app.use(bodyParser.urlencoded({extended: true})); 
app.use( express.static( "node_modules" ) );
app.use( express.static( "public" ) );
app.use( express.static( "views" ) );

/* app.use(express.static(path.join(__dirname, '/node_modules'))); */

app.use('/sayHello', router);
app.set("view engine", "ejs");


app.get("/", function(req, res){
   res.render("pages/index"); 
});

/*<!--app.get("/studios", function(req, res){
   res.render("studios");
}); 

app.get("/studios", function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render("studios", {
        drinks: drinks,
        tagline: tagline
    });
});

app.get("/portfolio", function(req, res){
   res.render("portfolio");
});

app.get("/news", function(req, res){
   res.render("news");
});

app.get("/gallery", function(req, res){
   res.render("gallery"); 
});

app.get("/test", function(req, res){
   res.render("test"); 
}); -->*/

app.listen(3000, process.env.IP, function(){
	console.log("Angular-Bootstrap Server Running!!");
});

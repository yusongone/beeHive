const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const session=require("express-session");
const bodyParser=require("body-parser");


const router=require("./src/router");
const hardWare=require("./src/hardware");
const hardWareConfig=require("./hardware.config.js");

const io=require("socket.io")();
io.on("connect",function(client){
    console.log("wwwww");

});
io.listen(9988);



app.use(function(req,res,next){
    next();
});

router.init(app);

app.use(function(req,res,next){
    console.log(res.errorCode);
});



//app.use(express.static(__dirname+'/public'));
app.use(cookieParser("keyboard cat"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set("views",__dirname+"/src/views");
//app.engine("html",ejs.renderFile);
app.set('view engine', 'jade');

hardWare.init(hardWareConfig);

app.listen(8000,function(){
    console.log("Service launch success!");
});


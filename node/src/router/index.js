const router=require("express").Router();


router.get("/",function(req,res,next){
    res.render("index",{});
    next();
});

exports.init=function(app){
    app.use("/",router);
}
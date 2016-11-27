const serialTools=require("./serial_tools");


exports.init=function(configJson){

    serialTools.scanPort();

    serialTools.connect(configJson.serialport,function(){

    });

}
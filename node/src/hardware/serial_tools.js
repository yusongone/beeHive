var Serial=require("serialport");

exports.scanPort=function(callback){
    Serial.list(function(err,item){
        console.log("Find Serial port :");
        callback?callback(item):"";

        item.forEach(function(i,index){
            console.log(index+" : "+i.comName);
        });
    });
}

exports.connect=function(_config,callback){

    const config={
        baudrate:115200,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false
    }

    for(var i in config){
        _config[i]!=undefined?config[i]=_config[i]:"";
    }

    var serialPort=new Serial(_config.name,config);

    serialPort.on('open', function(){
        console.log("Serial connected");
        callback?callback(serialPort):"";
    });

}

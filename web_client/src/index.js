import socketio from "socket.io-client"
const tt=()=>{
    const skt=socketio.connect("http://localhost:9988");
    skt.on("abc",function(){
        console.log("fefe");

    });
}
tt();
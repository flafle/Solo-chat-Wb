const io = require("socket.io")(3000,
     { cors: {
            origin:"http://127.0.0.1:5500",
            methods:["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
            }
    }); //require esto porque no trabajo con exprees, le pongo directo el puerto.

io.on("connection", (socket)=>{
    console.log("Usuarix conectadx");
    socket.emit("message", "Bienvenid@s");
    //que pasa cuando el socket se desconecta:
    socket.on("disconnect", ()=>{
        console.log("Usuarix desconectado");
    });
    //para capturar el mensaje del cliente:
    socket.on("chatmsg", msg => {

          io.emit("message", msg);
     });

});
//Programar el chat: para que funcione los mensajes entre el cliente y el servidor:
const mensajes = document.getElementById("mensajes");
const msgForm = document.getElementById("msgForm");


const socket = io ("http://localhost:3000");
//objeto socket:
socket.on("message", data =>{
    console.log(data);
    agregarMensaje(data);
});
msgForm.addEventListener("submit", e =>{
    e.preventDefault();
    //por medio del chatmsg le estoy emitiendo al socket la info que contiene en el html el msg
    socket.emit("chatmsg", msgForm.msg.value);
    msgForm.msg.value = ""; //para que client ponga lo que quiera.

});

function agregarMensaje(mensaje){
    const html = `<div>${mensaje}</div>`;
    mensajes.innerHTML += html;
}


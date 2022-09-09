const massages=require("../../model/chate-section/chate-massage")

module.exports=(io)=>{
    io.on("connection",(socket)=>{
        socket.on("join-chat-room",(data)=>{
            socket.join(data);
        })

        socket.on("chateMassage",(data)=>{
            massages.create(data)
            io.to(data.chatIdMassage).emit("AcceptMassage",data);
        })
    })
}
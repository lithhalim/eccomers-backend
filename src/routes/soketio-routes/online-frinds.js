
let object={}

module.exports=(io)=>{
    io.on("connection",(socket)=>{
        socket.on("onlineUser",(data)=>{
            object[data.regusterid]="true"
            io.emit("The-Online-User",object)

            socket.on('disconnect', ()=>{
                delete object[data.regusterid] 
                io.emit("The-Online-User",object)
            });
        })


    
    })

  
}
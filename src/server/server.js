
'use strict'
//---------------------------------------------require section----------------------------------------------//
//required express js section
const express = require('express');
const app = express();
const http = require('http')
const cors=require("cors");
const cookieParser = require('cookie-parser')
app.use(cookieParser())
require("dotenv").config();




//require soket io section 
const {Server} =require("socket.io")

const server = http.createServer(app);
const io=new Server(server,{
  cors:{
      origin: '*',
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,            //access-control-allow-credentials:true

  }
})

app.use(cors({
  origin: '*',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,            //access-control-allow-credentials:true
}))


// support url encoded bodies{parser use to accept the encoded json come from front }
app.use(express.urlencoded({ extended: false }));
// support json encoded bodies
app.use(express.json());






//-----------------------------------------------routes section--------------------------------------------//
const authntication_routes=require("../routes/authntication_routes/authntication_routes")
app.use(authntication_routes)

const post_routes=require("../routes/postes_routes/postes_routes")
app.use(post_routes)

const chate_routes=require("../routes/chate-routes/chate-routes");
app.use(chate_routes)

const basket_routes=require("../routes/basket_routes/basket_routes");
app.use(basket_routes);


//----------------------------------------- Soket Io ------------------------------------------------------//

//all function will do on massage section and postes
const massaage_Routes=require("../routes/soketio-routes/massage-routes")
massaage_Routes(io)


const online_Frends_Routes=require("../routes/soketio-routes/online-frinds");
online_Frends_Routes(io)

//----------------------------------------Error Handeler-----------------------------------------------------//
const NotFound404=require("../middelware/404-500/404");
const ErrorHandeler=require("../middelware/404-500/500");

app.use(ErrorHandeler);
app.use(NotFound404);






//----------------------------------------DataBase Connection----------------------------------------------//

//Connection With The Database
const database=require("../database/database");
async function start(PORT){// WHE MUST RUN DATABASE CONNECTION BEFORE LISTEN TO SERVER
  server.listen(PORT, async() => {
        try {
            await database.sync();  
            //USE TO SYNC ANY CHANGE CAN HAPPEN  ON DATABASE 
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
    };
    
  

//---------------------------------------export file section---------------------------------------------//
    module.exports ={
    start: start,
    server:server
};

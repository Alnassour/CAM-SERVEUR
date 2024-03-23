const express = require('express');
const bodyParser = require("body-parser");
const cors =  require ("cors");


const LouageRoute = require("./routes/louage.js")
const ColisRoute = require("./routes/Colis.js")
const StationRoute = require("./routes/station.js")
const TrajetInterRoute = require("./routes/trajet_inter.js")
const UsersRoute = require("./routes/users.js")

const DB = require("./db.js");


const server = express();
DB.ConnectDb();
const PORT= process.env.PORT || 3000;



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cors());


server.use("/louage",LouageRoute);
server.use("/colis",ColisRoute);
server.use("/station",StationRoute);
server.use("/trajetinter",TrajetInterRoute);
server.use("/users",UsersRoute);

server.listen(PORT, ()=>console.log("server running on port "+PORT));
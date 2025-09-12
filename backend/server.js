const express = require("express");
const cors = require("cors");
const bodyParser= require("body-parser")
const {v4:uuid} = require("uuid")

const app = express();

const Port = 3001;
app.listen(Port, ()=>{
    console.log(`Servidor rodando na porta http://locahost:${Port}`)
})

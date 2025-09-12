const express = require("express");
const cors = require("cors");
const bodyParser= require("body-parser")
const {v4:uuid} = require("uuid")

const app = express();

const Port = 5173;


app.use(cors());

app.use(bodyParser.json());

app.listen(Port, ()=>{
    console.log(`Servidor rodando na porta http://localhost:${Port}`)
})
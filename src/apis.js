var express = require("express");
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = express.Router();
app.use('/',router.get('/',(req, res)=>{
    res.status(200).send("<h1>Api Chat</h1>")
}))

app.use("/",router.get("/sobre", (req, res, next)=> {
    res.status(200).send({
        "nome":"Api Chat",
        "versão":"0.1.0",
        "autor":"Augusto F."
    })
}));

app.use("/salas",router.get("/salas", (req,res, next)=>{
    const salaControllers = require("./controllers/salaControllers");
    let resp=salaControllers.get();
    res.status(200).send(resp);
}));

module.exports=app;
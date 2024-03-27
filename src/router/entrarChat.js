append.use ("/entrar",router.post("/entrar", async(req, res, next)=> {
    const usuarioController = require("./controllers/usuarioControllers");
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));
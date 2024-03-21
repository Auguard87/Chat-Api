function listarSalas(){
    return [
        {
            "_id":{
                "$oid": "12345"
            },
            "nome":"Guereiros da InfoCimol",
            "tipo":"publica"
        },
        {
            "_id":{
                "$oid": "67890"
            },
            "nome":"Só os Comfirmados",
            "tipo":"privado",
            "chave":"qsxwdc"
        },
        {
            "_id":{
                "$oid": "54321"
            },
            "nome":"Guereiros da Info",
            "tipo":"publica"
        }
    ];
}
module.exports={listarSalas}
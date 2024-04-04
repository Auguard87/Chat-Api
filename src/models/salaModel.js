function listarSalas(){
  return[
{
    "_id":{
        "$oid": "643ece43ea11e6e5b0421f10"
    },
    "nome": "Guerreiros da InfoCimol",
    "tipo": "publica"
},{
    "_id":{
        "$oid": "643ecec1ea11e6e5b0421f12"
    },
    "nome": "Só os confirmados da INFO",
    "tipo": "privada",
    "chave": "at8q4haw"
},
{
    "_id":{
        "$oid": "643f22a2ea11e6e5b0421f18"
    },
    "nome": "Guerreiros da INFO",
    "tipo": "publico"
}
  ];
}

let listarSalas = async ()=>{
    let salas= await db.findAll("salas");
    return salas;
};

let buscarSala = async (idsala)=>{
    return db.findOne("salas",idsala);
}

let atualizarMensagens=async (sala)=>{
    return await db.updateOne("salas", sala,{_id:sala._id});
}

let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
      let msgs=[];
      sala.msgs.forEach((msg)=>{
        if(msg.timestamp >= timestamp){
          msgs.push(msg);
        }
      });
      return msgs;
    }
    return [];
}

  
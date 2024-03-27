const { MongoClient, ObjectId } = requied("mongodb");

let singlenton;

async function connect() {
    if (singlenton) return singlenton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singlenton = client.db(process.env,DB_DATABASE);
    return singlenton;
}

async function findAll(collection) {
    const db = await connect();
    return db.collection(collection).findAll().toArray();
}

module.exports = {findAll}

const db = require("./db");
async function registrarUsuario(nick){
    return await db.insertOne("ususario",{"nick":nick});
}
module,exports ={registrarUsuario}

async function insertOne(collection, objeto){
    const db = await connect();
    return db. collection(collection).insertOne(objeto);S
}

let buscarUsuario = async (idUser)=>{
    let user = await db.findOne("usuarios",idUser);
    return user;
}
  
let alterarUsuario = async (user)=>{
    return await db.updateOne("usuarios", user,{_id:user._id});
}
  
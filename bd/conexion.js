const admin = require("firebase-admin");
const keys  = require("../Keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
})

const proyecto=admin.firestore()
const usuarios=proyecto.collection("miejemploBD")
const productos=proyecto.collection("productos")
//console.log(productos);
//console.log(usuarios);

module.exports={usuarios , productos}
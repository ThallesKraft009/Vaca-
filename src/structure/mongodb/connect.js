module.exports = async(url) => {
  let { connect } = require("mongoose");
  let { green, yellow, red, cyan } = require("colors");
  
const conectado = await connect(url)

  if (!conectado) { 
    
console.log(red("MongoDB: Não foi conectado."))

  } else {
    console.log(cyan("MongoDb: Conectado!"))
  }
}
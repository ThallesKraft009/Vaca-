module.exports = async(d) => {

const author = d.author;

  const database = require("../mongodb/userdb.js");

  
const userdb = await database.findOne({
         userID: author.id
     }) 

      if(!userdb){
         const newuser = new database({ userID: author.id })
         await newuser.save()

      }

const msg = userdb.mensagens + 1
  
         await database.updateOne({
         userID: author.id
     }, { $set: {
         "mensagens": msg
         }
        })
  
  
}
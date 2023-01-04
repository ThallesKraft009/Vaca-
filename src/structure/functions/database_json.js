const fs = require("fs");

async function json_edit(arquivo, novo_json){
  
  fs.writeFile(`src/${arquivo}`, JSON.stringify(novo_json), err => {

    if (err) throw err; 
});
}

module.exports = json_edit;
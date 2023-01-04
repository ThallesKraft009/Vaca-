const progresso = require("./progresso.json");
const img = require("./personagens.json");

module.exports = async(req, res, DiscordRequest) => {


let personagens = [
  "Abóbora",
  "Arell",
  "Assassin_An",
  "Assassin_Li"
  ];
  
 let personagens_2 = [
  "Capitão_Teach",
  "Carol",
  "Christopher",
  "Erlang"
   ];
  
  let personagens_3 = [
  "Fada_da_Lua",
  "Fluttershy",
  "Garçonete_Doce",
  "Gata_corrida"
];

  console.log("Interação recebida")
  
let valor = req.body.data.values[0];

  let lista = progresso.lista;
    if (progresso.lista === `1`) lista = personagens;
    if (progresso.lista === `2`) lista = personagens_2;
    if (progresso.lista === `3`) lista = personagens_3;

let numero = Number(`${progresso.personagem}`);
  

  console.log(lista[numero])


  if (valor === `${progresso.lista}`){

  let author = progresso.users.find(user => user.id === `${req.body.member.user.id}`);

    if (author === undefined) {

    let novoUser = {
      id: req.body.member.user.id,
      pontos: 1
    };

    progresso.users.push(novoUser)

      let escolha = Number(progresso.personagem);
      
      
    res.send({
      type: 7,
      data: {
      embeds: [
        {
          title: `Quem é esse personagem?`,
          description: `O personagem era __${lista[numero]}__!`,
          image: { url: `${progresso.personagem_foto}` }
        }
      ],
      components: []
      }
    })
   
    } else {

let user = {
  id: author.id,
  pontos: author.pontos + 1
}

        let json = {
         global_ponto: progresso.global_ponto + 1,
         users: progresso.users, user
      }

let escolha_dois = Number(progresso.personagem);
      
    res.send({
      type: 7,
      data: {
      embeds: [
        {
          title: `Quem é esse personagem?`,
          description: `O personagem era __${lista[numero]}__!`,
          image: { url: `${progresso.personagem_foto}` }
        }
      ],
      components: []
      }
    })
      
    } 
    
  } else {
    
  }
  
}
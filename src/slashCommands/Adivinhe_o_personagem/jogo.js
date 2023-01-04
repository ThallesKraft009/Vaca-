const img = require("./personagens.json");
const fs = require("fs");
const progresso = require("./progresso.json");


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

  let lista = ["0", "1", "2", "3"];
  
     let personagemUm = lista[Math.floor(Math.random() * lista.length)];

  personagemUm = Number(personagemUm);

let personagemDois = lista[Math.floor(Math.random() * lista.length)];

  personagemDois = Number(personagemDois);

let personagemTres = lista[Math.floor(Math.random() * lista.length)];

  personagemTres = Number(personagemTres);
  
let certo = [`${personagemUm}`, `${personagemDois}`, `${personagemTres}`];
  
   certo = certo[Math.floor(Math.random() * certo.length)];

  console.log(`${personagemUm}`, `${personagemDois}`, `${personagemTres}`)
  let personagem_certo = Number(`${certo}`);
  
/*if (certo === personagemUm) personagem_certo = personagemUm;

if (certo === personagemDois) personagem_certo = personagemDois;

if (certo === personagemTres) personagem_certo = personagemTres;*/

  console.log(`O certo é: `, personagem_certo)

let foto = [];
  if (personagem_certo = 1) foto = `${img[`${personagens[personagemUm]}`]}`

  if (personagem_certo = 2) foto = `${img[`${personagens_2[personagemDois]}`]}`

if (personagem_certo = 3) foto = `${img[`${personagens_3[personagemTres]}`]}`

  
let label_1 = {
    label: `${personagens[personagemUm]}`,
    description: `Clique pra selecionar`,
    value: "1"
  }
  
  let label_2 = {
    label: `${personagens_2[personagemDois]}`,
    description: `Clique pra selecionar`,
    value: "2"
  }
  
  let label_3 = {
    label: `${personagens_3[personagemTres]}`,
    description: `Clique pra selecionar`,
    value: "3"
  }


  const endpoint = `/channels/${req.body.channel_id}/messages`;

certo = Number(certo)

    let json = {
         personagem: `${certo}`,
         personagem_foto: `${foto}`,
         lista: `${personagem_certo}`,
         global_ponto: progresso.global_ponto,
         users: progresso.users
       }

   
  
fs.writeFile("src/slashCommands/Adivinhe_o_personagem/progresso.json", JSON.stringify(json), err => {

    if (err) throw err; 
});

  let labels = [label_1, label_2, label_3];
  
  let partida = {
    embeds: [
      {
        title: `Quem é esse personagem?`,
        image: {
          url: `${foto}`
        }
      }
    ],
    components: [
          {
            type: 1,
            components: [
              {
                type: 3,
                custom_id: `personagem`,
                placeholder: "Escolha o Personagem",
                options: labels
              }
           ]
         }
        ]
  }

  res.send({
      type: 4,
      data: {
        content: `Iniciando jogo...`
      }
    })

  try {
    await DiscordRequest(endpoint, { method: 'POST', body: partida });
  } catch (err) {
    console.error(err);
  }
  

};
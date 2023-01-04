
const ping = {
  name: "bot-ping",
  description: "Veja minha latência atual",
  type: 1
}


const falar = {
   name: "falar",
    description: "Faça eu enviar uma mensagem",
    type: 1,
    default_member_permissions: 1 << 13,
    options: [
      {
        name: "msg",
        description: "Sua msg",
        type: 3,
        required: true
      }
    ]
}

const avatar = {
    name: "avatar-ver",
    description: "Veja o avatar de Alguém",
    type: 1,
    options: [
      {
        name: "membro",
        description: "Mencione o usuário",
        type: 6,
        required: true
      }
    ]
}


const buscarUID = {
    name: "buscar-uid",
    description: "Busque o UID de algum membro",
    type: 1,
    options: [
      {
        name: "membro",
        description: "Mencione o membro",
        type: 6,
        required: true
          }
        ]
}

const salvarUID = {
   name: "uid-save",
    description: "Salve seu uid em meu banco de dados",
    type: 1,
    options: [
      {
            name: "uid",
            description: "Insira seu Uid aqui",
            type: 10,
            required: true
          }
        ]
}

const coletarMadeira = {
    name: "coletar-madeira",
    description: "Colete madeiras em seu mundo",
    type: 1
}

const entrar_no_mundo = {
    name: "entrar-no-mundo",
    description: "Entre no mundo Rpg",
    type: 1
}

const coletarRochas = {
    name: "coletar-rochas",
    description: "Colete rochas pelo mundo",
    type: 1
}

const criarGravetos = {
    name: "criar-gravetos",
    description: "Crie gravetos e utilize pra criar itens",
    type: 1,
    options: [
      {
        name: "quantidade",
        description: "A quantidade de gravetos que você quer criar",
        type: 10,
        required: true
      }
    ]
}

const criarPicareta = {
    name: "criar-picareta",
    description: "Crie uma picareta",
    type: 1,
    options: [
      {
        name: "picareta",
        description: "Escolha a sua picareta",
        type: 3,
        required: true,
        choices: [
          {
            name: "Picareta de Pedra",
            value: "pedra"
          },{
            name: "Picareta de Cobre",
            value: "cobre"
          },{
            name: "Picareta de Ferro",
            value: "ferro"
          },{
            name: "Picareta de Titânio",
            value: "titanio"
          }
        ]
      }
    ]
}

const explorarCaverna = {
    name: "explorar-caverna",
    description: "Explore uma caverna e consiga minérios",
    type: 1
}

const criarFornalha = {
  name: "criar-fornalha",
  description: "Crie uma fornalha pra usar",
  type: 1,
  options: [
    {
      name: "fornalha",
      description: "Qual fornalha você quer criar?",
      type: 3, 
      required: true,
      choices: [
        {
          name: "Fornalha de Pedra",
          value: "pedra"
        },{
          name: "Fornalha de Cobre",
          value: "cobre"
        },{
          name: "Fornalha de Ferro",
          value: "ferro"
        },{
          name: "Fornalha de Titânio",
          value: "titanio"
        }   
      ]
    }
  ]
}

const jogo = {
  name: "adivinhe_o_personagem",
  description: "Jogue com os amigos",
  type: 1
}

  
const comandos = [ping, falar, avatar, buscarUID, salvarUID, coletarMadeira, entrar_no_mundo, coletarRochas, criarPicareta, explorarCaverna, criarGravetos, criarFornalha]

module.exports = comandos;

async function editarCmd(id, command){

let { DiscordRequest } = require("../structure/slashCommands/utils.js");

  let endpoint = `applications/${process.env.id}/guilds/${process.env.guild}/commands/${id}`;

  try {
    await DiscordRequest(endpoint, { method: 'PATCH', body: command });

console.log("Comando editado.")

  } catch (err) {
    console.error(err);
  }
 
}

async function deletarCmd(id){
  let { DiscordRequest } = require("../structure/slashCommands/utils.js");

  let endpoint = `applications/${process.env.id}/guilds/${process.env.guild}/commands/${id}`;

  try {
    await DiscordRequest(endpoint, { method: 'DELETE' });

console.log("Comando deletado.")

  } catch (err) {
    console.error(err);
  }
}
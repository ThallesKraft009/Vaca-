const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

let picareta = req.body.data.values[0];
const author = req.body.member.user.id

//picareta = [ pedra, cobre, ferro, titanio, pular];


let cobre = Math.floor(Math.random() * 2) + 15
  
if (picareta === "pedra"){

picareta = await db.get(`picareta_rocha_${author}`);
    if (picareta === null) picareta = 0;

  if (picareta === 0 || picareta < 0) return res.send({
    type: 7,
    data: {
      content: `Você não tem uma picareta de **Pedra**!`
    }
  })

  await db.add(`cobre_${author}`, cobre);
  await db.sub(`picareta_rocha_${author}`, 2)

  return res.send({
    type: 7,
    data: {
      content: `<@${author}> | Você minerou ${cobre} cobres!`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
    }
  })

}
if (picareta === "cobre"){
  picareta = await db.get(`picareta_cobre_${author}`);
    if (picareta === null) picareta = 0;

  if (picareta === 0 || picareta < 0) return res.send({
    type: 7,
    data: {
      content: `Você não tem uma picareta de **Cobre**!`
    }
  })

  await db.add(`cobre_${author}`, cobre);
  await db.sub(`picareta_cobre_${author}`, 2)

  return res.send({
    type: 7,
    data: {
      content: `<@${author}> | Você minerou ${cobre} cobres!`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
    }
  })
}
if (picareta === "ferro"){
   picareta = await db.get(`picareta_ferro_${author}`);
    if (picareta === null) picareta = 0;

  if (picareta === 0 || picareta < 0) return res.send({
    type: 7,
    data: {
      content: `Você não tem uma picareta de **Ferro**!`
    }
  })

  await db.add(`cobre_${author}`, cobre);
  await db.sub(`picareta_ferro_${author}`, 2)

  return res.send({
    type: 7,
    data: {
      content: `<@${author}> | Você minerou ${cobre} cobres!`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
    }
  })
}
if (picareta === "titanio"){
   picareta = await db.get(`picareta_titanio_${author}`);
    if (picareta === null) picareta = 0;

  if (picareta === 0 || picareta < 0) return res.send({
    type: 7,
    data: {
      content: `Você não tem uma picareta de **Titânio**!`
    }
  })

  await db.add(`cobre_${author}`, cobre);
  await db.sub(`picareta_titanio_${author}`, 2)

  return res.send({
    type: 7,
    data: {
      content: `<@${author}> | Você minerou ${cobre} cobres!`,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
    }
  })
}
if (picareta === "pular") return res.send({
  type: 7,
  data: {
    content: `<@${author}> | Você desistiu de minerar esse minério...pois não tem uma picareta que possa destruir o bloco!`,
    components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
  }
})

};
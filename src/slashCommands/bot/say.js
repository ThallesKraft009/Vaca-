module.exports = async(req, res, DiscordRequest) => {

  const user = req.body.member.user.id
  const mensagem = req.body.data.options[0].value;
  const canal = req.body.channel_id
  const url = `/channels/${canal}/messages`
  
   const msg = {
       content: `${mensagem}`,
    }

  try {
    await DiscordRequest(url, { method: 'POST', body: msg });
  } catch (err) {
    console.error(err);
  }

   res.send({
 type: 4,
 data: {
     content: `msg enviada`,
     flags: 64
   }
})
  
}
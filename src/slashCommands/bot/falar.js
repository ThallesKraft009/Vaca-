module.exports = async(req, res, DiscordRequest) => {

  //channels/{channel.id}/messages

  const msgauthor = req.body.data.options[0].value;

  const endpoint = `/channels/${req.body.channel_id}/messages`;


  
let msg = {
    content: `${msgauthor}`
}

  try {
    await DiscordRequest(endpoint, { method: 'POST', body: msg });
  } catch (err) {
    console.error(err);
  }

return res.send({
        type: 4,
        data: {
          content: `A mensagem foi enviada!`,
          flags: 64,
        },
      });

  
  
};
module.exports = (req, res) => {

return res.send({
        type: 4,
        data: {
          content: `🏓 Pong!\nApi Ping: **\`${res.statusCode}ms\`**`,
        },
      });

};
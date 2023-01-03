module.exports = (token, status) => {


  
const WebSocket = require("ws");
const ws = new WebSocket("wss://gateway.discord.gg/?v=6&encoding=json");
const c = require("colors")
let interval = 0;
  
  if (status === null) status = [{
    name: "com ThallesKraft",
    type: 0
  }]

const data = {
  op: 2,
  d: {
    token: token,
    intents: 513,
    properties: {
         $os: "linux",
         $browser: "chrome",
         $device: "chrome",
     },    
    large_threshold: 250,
    shard: [0, 1],
    presence: {
      activities: status,
      status: "dnd",
      since: 91879201,
      afk: false
    },
    },
}

  
  ws.on("open", function open() {
    ws.send(JSON.stringify(data));

    console.log(c.cyan("Fada da lua Canary foi iniciada!"))


})

 ws.on("message", function incoming(a) {
 
    let payload = JSON.parse(a);

    const { t, op, d } = payload;

   switch (op) {
      case 10:
        const { heartbeat_interval } = d;

           interval = heartbeat(heartbeat_interval);
        
          break;
   }
   
})
  

const heartbeat = (ms) => {
  return setInterval(() => {
    ws.send(JSON.stringify({op: 2, d: null}))
  }, ms)
}

}

var mqtt = require('mqtt')
var client  = mqtt.connect('ws://localhost:3000')

client.on('connect', function () {
    console.log("Connected")
    client.subscribe('boats')
  })
   
client.on('message', function (topic, message) {
// message is Buffer
console.log(message.toString())
})
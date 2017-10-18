var mqtt = require('mqtt')
var fs = require('fs');

var client  = mqtt.connect('ws://localhost:3000')

client.on('connect', function () {
    client.publish('boats', 'Publishing')
    beginPublishing()
  })
   
var array = fs.readFileSync('boatData.csv').toString().split("\n");
var counter = 0;

function beginPublishing () {
    if (counter < array.length) {
        client.publish('boats', array[counter])
        counter++
        setTimeout(beginPublishing, 1)
    } else {
        client.end()
    }
}
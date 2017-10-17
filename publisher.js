var mqtt = require('mqtt')
var fs = require('fs');
var lineReader = require('line-reader');
var client  = mqtt.connect('mqtt://localhost:1883')

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
        setTimeout(beginPublishing, 1000)
    } else {
        client.end()
    }
}
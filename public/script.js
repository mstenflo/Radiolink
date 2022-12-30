const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt')

client.on('connect', function () {
  console.log('Connected')
  
  client.subscribe('stenflo/radiolink', function (err) {
    if (!err) {
      client.publish('stenflo/radiolink', 'Hello Radiolink MQTT')
    }
  })
})

document.querySelector('#kgnu').addEventListener('click', function(event) {event.preventDefault(); buttonPress(event.path[0].id);})
document.querySelector('#paradise').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#krcc').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#kusf').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#wfmu').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swissclassic').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swissjazz').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swisspop').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#deepspace').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#dronezone').addEventListener('click', function(event) {buttonPress(event.path[0].id);})

document.querySelector('#kgnu').addEventListener('touchstart', function(event) {event.preventDefault(); buttonPress(event.path[0].id);})
document.querySelector('#paradise').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#krcc').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#kusf').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#wfmu').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swissclassic').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swissjazz').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#swisspop').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#deepspace').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})
document.querySelector('#dronezone').addEventListener('touchstart', function(event) {buttonPress(event.path[0].id);})

function buttonPress(station) {
  client.publish('stenflo/radiolink', station.toString());
}
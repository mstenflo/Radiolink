const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt')

client.on('connect', function () {
  console.log('Connected')
  
  client.subscribe('stenflo/radiolink', function (err) {
    if (!err) {
      client.publish('stenflo/radiolink', 'Hello Radiolink MQTT')
    }
  })
})

// // document.querySelector('#kgnu').addEventListener('mousedown', function(event) {event.preventDefault(); buttonPress(event.path[0].id);})
// document.querySelector('#paradise').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#krcc').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#kusf').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#wfmu').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#swissclassic').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#swissjazz').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#swisspop').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#deepspace').addEventListener('click', function(event) {buttonPress(event.path[0].id);})
// document.querySelector('#dronezone').addEventListener('click', function(event) {buttonPress(event.path[0].id);})

document.querySelector('#kgnu').addEventListener('touchstart', buttonPress)
document.querySelector('#paradise').addEventListener('touchstart', buttonPress)
document.querySelector('#krcc').addEventListener('touchstart', buttonPress)
document.querySelector('#kusf').addEventListener('touchstart', buttonPress)
document.querySelector('#wfmu').addEventListener('touchstart', buttonPress)
document.querySelector('#swissclassic').addEventListener('touchstart', buttonPress)
document.querySelector('#swissjazz').addEventListener('touchstart', buttonPress)
document.querySelector('#swisspop').addEventListener('touchstart', buttonPress)
document.querySelector('#deepspace').addEventListener('touchstart', buttonPress)
document.querySelector('#dronezone').addEventListener('touchstart', buttonPress)

function buttonPress(e) {
  // e.preventDefault();
  // console.log(e);
  // console.log(e.path[0].id);
  document.getElementById(e.path[0].id).innerHTML = "touched"
  client.publish('stenflo/radiolink', e.path[0].id.toString());
}
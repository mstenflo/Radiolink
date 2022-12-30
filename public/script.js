const client  = mqtt.connect('ws://broker.emqx.io:8083/mqtt')

client.on('connect', function () {
  console.log('Connected')
  
  client.subscribe('stenflo/radiolink', function (err) {
    if (!err) {
      client.publish('stenflo/radiolink', 'Hello Radiolink MQTT')
    }
  })
})

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
  client.publish('stenflo/radiolink', e.target.id.toString());
}
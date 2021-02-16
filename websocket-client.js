var mqtt = require('mqtt')
var client  = mqtt.connect('ws://localhost:9100')

      
    
client.on('connect', function () {
    console.log('[+] Client connected');
        setInterval(() => {
          // let payload_esp8266 = JSON.stringify(
          //   [
          //     {type: "Temperture", value: Math.ceil(Math.random() * 80) * 0.01},
          //     {type: "SoilMoisture", value: Math.ceil(Math.random() * 80) * 0.01},
          //     {type: "UVLight", value: Math.ceil(Math.random() * 80) * 0.01},
          //     {type: "Humidity", value: Math.ceil(Math.random() * 80) * 0.01},
          //     {type: "AtmPressure", value: NaN},
          //     {type: "CarbonIVoxide", value: NaN}
          // ]
          // );

        let payload_temperature = JSON.stringify(Math.round(Math.random() * 30))
        let payload_humid = JSON.stringify(Math.round(Math.random() * 70))
        let payload_atmp = JSON.stringify(Math.round(Math.random() * 100))
        let payload_soil = JSON.stringify(Math.round(Math.random() * 15))
        let payload_light = JSON.stringify(Math.round(Math.random() * 10))

        let payload_custom = JSON.stringify(
           {
            label1: [{ date: new Date(), value: Math.round(Math.random() *  10) },
                      {date: new Date(), value: Math.round(Math.random() *  10)},
                      {date: new Date(), value: Math.round(Math.random() *  10)},
                      {date: new Date(), value: Math.round(Math.random() *  10)} ],
            label2:  [{ date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10)},
              {date: new Date(), value: Math.round(Math.random() *  10)},
              {date: new Date(), value: Math.round(Math.random() *  10)},
              {date: new Date(), value: Math.round(Math.random() *  10)} ],
            label3:[{ date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10)} ],  
            label4: [{date: new Date(), value: Math.round(Math.random() *  10)},
              {date: new Date(), value: Math.round(Math.random() *  10)},
              {date: new Date(), value: Math.round(Math.random() *  10)} ],
            label5: [{ date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10)} ],
            label6: [{ date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10) },
              {date: new Date(), value: Math.round(Math.random() *  10)} ]
          } 
        )
 
          //  client.publish("esp8266", payload_esp8266); 
        
           client.publish("custom", payload_custom);


           client.publish("temperature", payload_temperature);
           client.publish("humidity", payload_humid);
           client.publish("atpressure", payload_atmp);
           client.publish("light", payload_light);
           client.publish("soil", payload_soil);



          }, 60000);
        
 })

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})
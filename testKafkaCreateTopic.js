var config= require('./config');
var getHostString= require('./GetHostString');
var redis = require('redis');
var kafka = require('kafka-node');
var util = require('util');
config.init().then(
(configs)=>{

    var KafkaServer = JSON.parse(configs["/KafkaServer"]);
    var ZookeeperServer = JSON.parse(configs["/ZookeeperServer"]);
    var ZookeeperHostString=getHostString(ZookeeperServer.list);
    const client = new kafka.Client(ZookeeperHostString, "my-client-id", {
       sessionTimeout: 300,
       spinDelay: 100,
       retries: 2
    });
   const producer = new kafka.HighLevelProducer(client);
   producer.on("ready", function() {
       console.log("Kafka Producer is connected and ready.");
       producer.createTopics(['test'], true, function (err, data) {
           if(err) console.log(err);
           console.log(data);
       });
       console.log("ok");
       client.close(function(){
          console.log("exit"); 
          process.exit();
       })
   });

});


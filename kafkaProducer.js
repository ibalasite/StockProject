var config= require('./config');
var getHostString= require('./GetHostString');
var redis = require('redis');
var kafka = require('kafka-node');
var util = require('util');
var kafkaService = require('./KafkaService');
config.init().then(
(configs)=>{
    /*
    var KafkaServer = JSON.parse(configs["/KafkaServer"]);
    var kafkaHostString=getHostString(KafkaServer.list);
    const client = new kafka.KafkaClient({
       kafkaHost:kafkaHostString,
       connectTimeout: 300,
    });
    */
    var ZookeeperServer = JSON.parse(configs["/ZookeeperServer"]);
    var ZookeeperHostString=getHostString(ZookeeperServer.list);
    const client = new kafka.Client(ZookeeperHostString,"my-client-id" , {
       sessionTimeout: 300,
       spinDelay: 100,
       retries: 2
    });

   const producer = new kafka.HighLevelProducer(client);
   producer.on("error", function(error) {
       console.error(error);
   });
   producer.on("ready", function() {
       console.log("Kafka Producer is connected and ready.");
       kafkaService.sendRecord({ type: 1,userId: "evans", userId:"userid"+Date.now(),sessionId:"session",data:"hi"+Date.now(),partition:0,producer:producer}, function (err, data) {
           if(err){
               console.log(err);
           }else{
               console.log(data);
           }
           console.log("ok");

           client.close(function(){
               console.log("exit"); 
               process.exit();
           })
      });
//logic
   });

});


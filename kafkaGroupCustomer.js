var config= require('./config');
var getHostString= require('./GetHostString');
var redis = require('redis');
var kafka = require('kafka-node');
var ConsumerGroup = require('kafka-node').ConsumerGroup;
var util = require('util');
const args = require('yargs').argv;
let clientId = "my-client-id";
if(args.clientid !== undefined ){
   clientId= args.clientid;
}
console.log("cid:"+clientId)
config.init().then(
(configs)=>{

    var ZookeeperServer = JSON.parse(configs["/ZookeeperServer"]);
    var ZookeeperHostString=getHostString(ZookeeperServer.list);
    var KafkaServer = JSON.parse(configs["/KafkaServer"]);
    var KafkaHostString=getHostString(KafkaServer.list);
    const topics = [
             "test"
    ];
    
    var options = {
     host: ZookeeperHostString,  // zookeeper host omit if connecting directly to broker (see kafkaHost below)
     //kafkaHost: KafkaHostString, // connect directly to kafka broker (instantiates a KafkaClient)
     groupId: clientId,
     sessionTimeout: 10000,
     autoCommit: true,
     autoCommitIntervalMs: 100,
     maxTickMessages: 10,
     protocol: ['roundrobin'],
     fromOffset: 'latest', // default
   }; 
   var consumer = new ConsumerGroup(options, topics);
   consumer.on("message", function(message) {
   console.log(message);
   console.log('%s read msg Topic="%s" Partition=%s Offset=%d', this.client.clientId, message.topic, message.partition, message.offset);
 
    // Read string into a buffer.
        var buf = new Buffer(message.value, "binary"); 
        
        var decodedMessage = {};
       try {
           decodedMessage = JSON.parse(buf.toString());
       } catch(e) {
           //console.log("error:"+e); 
           decodedMessage = {data:buf.toString()}; // error in the above string (in this case, yes)!
       }
        console.log(decodedMessage);
    //Events is a Sequelize Model Object. 
/*
    return Events.create({
        id: decodedMessage.id,
        type: decodedMessage.type,
        userId: decodedMessage.userId,
        sessionId: decodedMessage.sessionId,
        data: JSON.stringify(decodedMessage.data),
        createdAt: new Date()
       });
*/
   });
    consumer.on('offsetOutOfRange', function (topic) {
         console.log('offsetevent');

    })
    consumer.on("error", function(err) {
        console.log("error", err);
    });
//logic
   });



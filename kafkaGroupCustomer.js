var config= require('./config');
var getHostString= require('./GetHostString');
var redis = require('redis');
var kafka = require('kafka-node');
var util = require('util');
const args = require('yargs').argv;
let clientId = "my-client-id";
if(args.clientid !== undefined ){
   clientId= args.clientid;
}
console.log("cid:"+clientId)
config.init().then(
(configs)=>{

    var KafkaServer = JSON.parse(configs["/KafkaServer"]);
    var ZookeeperServer = JSON.parse(configs["/ZookeeperServer"]);
    var ZookeeperHostString=getHostString(ZookeeperServer.list);
    const client = new kafka.Client(ZookeeperHostString, clientId, {
       sessionTimeout: 300,
       spinDelay: 100,
       retries: 2
    });
    const topics = [
        {
            topic: "test"
        }
    ];
    const options = {
        autoCommit: true,
        fetchMaxWaitMs: 1000,
        fetchMaxBytes: 1024 * 1024,
        encoding: "buffer"
    };
 
   const consumer = new kafka.HighLevelConsumer(client, topics, options);
   consumer.on("message", function(message) {
       console.log('%s read msg Topic="%s" Partition=%s Offset=%d', this.client.clientId, message.topic, message.partition, message.offset);
 
    // Read string into a buffer.
        var buf = new Buffer(message.value, "binary"); 
        var decodedMessage = JSON.parse(buf.toString());
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

    consumer.on("error", function(err) {
        console.log("error", err);
    });
//logic
   });



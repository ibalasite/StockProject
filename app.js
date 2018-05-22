var config= require('./config');
var redis = require('redis');
config.init().then(
(configs)=>{
var RedisServer = JSON.parse(configs["/RedisServer"]);
console.log("config"+RedisServer.list)
var HashRing = require('hashring');
var hosts = RedisServer.list;
var ring = new HashRing(hosts
  , 'md5', {
    'max cache size': 10000
  });

var serverInfo=ring.get('id10001').split(":"); 
var server = {host:serverInfo[0],port:serverInfo[1]};
var client = redis.createClient(server.port, server.host);
client.on('connect', function() {
    console.log('connected');
});
client.on("error", function(error) {
    console.log(error);
});
client.incr("test", function(err, reply) {
    if (err) throw err;
    console.log(reply); // 11
   client.quit();
});

});

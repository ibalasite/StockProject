var config= require('./config');
var redis = require('redis');
config.init().then(
(configs)=>{
var RedisServer = JSON.parse(configs["/RedisServer"]);
//console.log("config"+RedisServer.list)
var HashRing = require('hashring');
var hosts = RedisServer.list;
var ring = new HashRing(hosts
  , 'md5', {
    'max cache size': 10000
  });
  var i =0;
  var hostCount={};
 while (i<=5000) {
          var id = 100000+i
          var serverInfo=ring.get('id'+id).split(":"); 
	  var server = {host:serverInfo[0],port:serverInfo[1]};
          if(!hostCount[server.host]) hostCount[server.host]=0; 
          hostCount[server.host]++; 
          console.log("id:%s,host:%s",id,server.host);
          i = i + 1;
 }
Object.keys(hostCount).forEach(function(key) {
  var count = hostCount[key];
  console.log("server:%s,count:%d",key,count);
});


});

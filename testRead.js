var config= require('./config');
const {promisify} = require('util');
var redis = require('redis');
config.init().then(
async function(configs){
var RedisServer = JSON.parse(configs["/RedisServer"]);
console.log("config"+RedisServer.list)
var HashRing = require('hashring');
var hosts = RedisServer.list;
var ring = new HashRing(hosts
  , 'md5', {
    'max cache size': 10000
  });
var key = 'productid100001';
var serverInfo=ring.get(key).split(":"); 
var server = {host:serverInfo[0],port:serverInfo[1]};
var client = redis.createClient(server.port, server.host);
var  get = promisify(client.get).bind(client);
client.on('connect', function() {
    console.log('connected');
});
client.on("error", function(error) {
    console.log(error);
});
var reply= await get(key); 
var result={};
if(!reply){
    result = getByDB(key,configs);
 }else{
    result = JSON.parse(reply);
 }
console.log(result); 
client.quit();

});

function getByDB(key,config)
{
  var mysql = require('mysql');
  var dbConfig = JSON.parse(config["/DB"]);
  console.log("config:"+dbConfig.host);
/*
  var con = mysql.createConnection({
  host: "rdb",
  user: "root",
  password: "123456",
  database: "punk"
});
*/
return {};
}


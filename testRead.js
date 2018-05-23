var config= require('./config');
const {promisify} = require('util');
var redis = require('redis');
const args = require('yargs').argv;
if(args.key == undefined )
{
  console.log('--key must be setting');
}
else
{

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
var keyPrefix= "productid";
var key = args.key;
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
var reply= await get(keyPrefix+key); 
var result={};
if(!reply){
    result = await getByDB(key,configs);
    console.log('The quota is: ', result.Quota);
    console.log('The sale is: ', result.Sale);
 }else{
    result = JSON.parse(reply);
 }
console.log("result:"+result); 
client.quit();

});
}

async function getByDB(key,config)
{
  var mysql = require('mysql');
  var dbConfig = JSON.parse(config["/DB"]);
  console.log("config:"+dbConfig.host);
  var mysql = require('mysql');
  var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : dbConfig.host,
  user            : dbConfig.user,
  password        : dbConfig.password,
  database        : dbConfig.database
  });
  var getConnection= promisify(pool.getConnection).bind(pool);
  var connection = await getConnection();
  var query = promisify(connection.query).bind(connection);
  var results=await query('select Quota,Sale from Stock where id = ?', [key]);
  /*
  console.log('The quota is: ', results[0].Quota);
  console.log('The sale is: ', results[0].Sale);
  */
  connection.release();
  pool.end();
  return results[0];
}

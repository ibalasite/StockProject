const {promisify} = require('util');
async function initConfig(){
var thrift = require('thrift');
var configService = require('./gen-nodejs/ConfigService');
var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;
var connection = thrift.createConnection("localhost", 9090, {
  transport : transport,
  protocol : protocol
});
connection.on('error', function(err) {
    console.log("error:"+err);
});
connection.on('connect',function () {
    //console.log("connect");
});
var client = thrift.createClient(configService, connection);
var  getConfig = promisify(client.getConfig).bind(client);
var message = await getConfig();
var result = {};
  try {
    result = JSON.parse(message);

  } catch (e) {
    console.log(e);
    console.log(msg);
  }
connection.end();
return result;
}

//init().then((config)=>{console.log("config"+config["/RedisServer"])});

module.exports = {
    init : initConfig
};


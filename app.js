let config = {}
async function init(){
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
var client = thrift.createClient(configService, connection);
const {promisify} = require('util');
const getConfig = promisify(client.getConfig).bind(client);
  var message = await getConfig();
  console.log("message:"+message);
  console.log("end");
  connection.end();
  
}
function app()
{


}
init();


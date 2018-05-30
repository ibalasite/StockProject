var util = require('util');
function GetHostString(hosts)
{
    var hostString="";
    if(util.isArray(hosts))
    {
       for(var i =0;i<hosts.length;i++)
       {
        
           hostString += util.format('%s:%s,', hosts[i].host,hosts[i].port); 
       }
       hostString = hostString.replace(/,$/, '');
   }
   return hostString;
}

module.exports = GetHostString;

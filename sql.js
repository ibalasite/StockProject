var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rdb",
  user: "root",
  password: "123456",
  database: "punk"
});
const {promisify} = require('util');
const query = promisify(con.query).bind(con);

function run(con)
{
    con.connect(async function(err) {
      if (err) throw err;
     // console.log("Connected!");
      var i=1;
      while (i<=5000) {
          var id = 100000+i
          //console.log("id=", id);
          var quota = getRandomInt(5)+5;
          var sale = getRandomInt(5);
          var sql = "insert into Stock values("+id+","+quota+","+sale+");";
	  var result =  await query(sql); 
          console.log(sql);

          i = i + 1;
       }
      con.end();      
    });
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

run(con);
//con.end();

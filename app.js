var request = require('request');
/*
request.post(
    'https://www.walkerland.com.tw/curry2018/back/votestore/',
    { qs: {
           formData:  {
            sid: '155555',
            uid: '1581301145326499',
            name: '陳小姐',
            email: 'a836141@gmail.com',
            sname: '日向海軍咖哩',
            usrip: 'fd7e:7c36:1c62:41d1:fc97:3d6:c010:287d'
           }
         }
     },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }else{
            console.log("error:"+error);
            console.log(response.statusCode);

        }
    }
);
1943477378996659
for ( i=2003 ; i < 2002 ; i++ ){
*/
tbody="sid=15&uid=1943477378996659&name=%E9%99%B3%E9%AD%AF%E6%AF%94&email=a836141%40gmail.com&sname=%E6%97%A5%E5%90%91%E6%B5%B7%E8%BB%8D%E5%92%96%E5%93%A9&usrip=fd7e%3A7c36%3A1c62%3A41d1%3Afc97%3A3d6%3Ac010%3A287d";
console.log(tbody);
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'https://www.walkerland.com.tw/curry2018/back/votestore/',
  body: tbody
}, function(error, response, body){
  console.log(body);
});

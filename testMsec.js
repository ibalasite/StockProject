const now=(unit,hrTime=process.hrtime())=>{

     //const hrTime=process.hrtime(); 
     switch (unit) {
       case 'milli':return hrTime[0] * 1000 + hrTime[1] / 1000000;
       case 'micro':return hrTime[0] * 1000000 + hrTime[1] / 1000;
       case 'nano':return hrTime[0] * 1000000000 + hrTime[1] ;
        break;
       default:return hrTime[0] * 1000000000 + hrTime[1] ;
     }

 }
const hrTimer = process.hrtime();
console.log(now('milli',hrTimer));
console.log(now('micro',hrTimer));
console.log(now('nano',hrTimer));
console.log(Date.now()/1000);
console.log(Date.now() %6);

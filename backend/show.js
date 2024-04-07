
var url = require('url');



   // شرط عرض بيانات من القاعدة
exports.getData = function (connection,res,req) {
   var q = url.parse(req.url, true).query;

   if(q.getType === "reservation") {
      const query = `SELECT * FROM ${`reservation`}`;
   connection.query(query, (error, results, fields) => {
      if (error) {
        console.error("errror>>>>",error);
      } else {
       const data = JSON.stringify(results)
      //  console.log("result=>>>",data);
       res.writeHead(200, { 'Content-Type': 'application/json' });
       res.end(data);
      }
    });
   } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end("no data");
   } 
}
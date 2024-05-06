const http = require('http');
const mysql = require('mysql');
const getData = require('./show');

// Create a MySQL connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "ataa"
});


// Create an HTTP server
const server = http.createServer((req, res) => {

   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin (replace '*' with specific origins if needed)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // شرط اضافة بيانات لقاعدة البيانات

  if (req.method === 'POST') {
    let body = '';

    // Read the form data from the request
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // Parse the form data
      const formData = new URLSearchParams(body);

      // Extract values from form data
      if(formData.get('formName') === 'formContact') {

      const fname = formData.get('fname');
      const lname = formData.get('lname');
      const gender = formData.get('gender');
      const phone = formData.get('phone');
      const date = formData.get('date');
      const email = formData.get('email');
      const language = formData.get('preferred-language');
      const message = formData.get('message');
      
      // Insert data into MySQL

         const query = `INSERT INTO ${`contact_us`} (${`ID`},${`fname`}, ${`lname`}, ${`gender`}, ${`phone`}, ${`birthDate`}, ${`email`}, ${`language`}, ${`message`}) 
         VALUES (NULL,'${fname}', '${lname}', '${gender}', '${phone}', '${date}', '${email}', '${language}', '${message}')`;

         pool.query(query, (error, results, fields) => {
           if (error) {
             console.error(error);
             res.writeHead(500, { 'Content-Type': 'text/plain' });
             res.end('Internal Server Error');
           } else {
             res.writeHead(200, { 'Content-Type': 'text/plain' });
             res.end('Data inserted successfully');
           }
         });


      }else if(formData.get('formName') === 'formRes'){

      const name = formData.get('name');
      const location = formData.get('location');
      const date = formData.get('date');
      const time = formData.get('time');
      
      // Insert data into MySQL

         const query = `INSERT INTO ${`reservation_ok`} (${`ID`},${`Name`}, ${`location`}, ${`date`}, ${`time`}) 
         VALUES (NULL,'${name}', '${location}', '${date}', '${time}')`;

         pool.query(query, (error, results, fields) => {
           if (error) {
             console.error(error);
             res.writeHead(500, { 'Content-Type': 'text/plain' });
             res.end('Internal Server Error');
           } else {
             res.writeHead(200, { 'Content-Type': 'text/plain' });
             res.end('Data inserted successfully');
           }
         });


      } else {

      const firstname = formData.get('fname');
      const lastname = formData.get('lname');
      const email = formData.get('email');
      const password = formData.get('psw');
      const confPassword = formData.get('confpsw');
      const phone = formData.get('pn');
      const date = formData.get('bdate');
      const blood = formData.get('blood');
      const region = formData.get('reg');
      const city = formData.get('city');
      const language = formData.get('lang');
      const gender = formData.get('gender');

         const query = `INSERT INTO ${`account`} (${`ID`},${`firstname`},${`lastname`}, ${`email`}, ${`password`},${`confPassword`},${`phone`},${`date`}, ${`blood`}, ${`region`},${`city`},${`language`}, ${`gender`}) 
         VALUES (NULL,'${firstname}','${lastname}', '${email}', '${password}','${confPassword}','${phone}', '${date}', '${blood}','${region}', '${city}', '${language}','${gender}')`;

         pool.query(query, (error, results, fields) => {
           if (error) {
             console.error(error);
             res.writeHead(500, { 'Content-Type': 'text/plain' });
             res.end('Internal Server Error');
           } else {
             res.writeHead(200, { 'Content-Type': 'text/plain' });
             res.end('Data inserted successfully');
           }
         });
 
      }
      
    });
  } else if(req.method === 'GET'){
      // شرط عرض بيانات من القاعدة
      getData.getData(pool,res,req);
   setTimeout(()=>{
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
   },1000);
  }
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});
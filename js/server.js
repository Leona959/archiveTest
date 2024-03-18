// const express = require('express');
// const path = require('path');

// const https = require('https');
// const fs = require('fs');

// const app = express();
// const port = 443; // Default HTTPS port

// // Set up SSL certificate options
// const sslOptions = {
//   key: fs.readFileSync('../../private.key'), // Replace with the path to your private key file
//   cert: fs.readFileSync('../../game_sol-hero_com.crt'), // Replace with the path to your certificate file
// };

// app.use(express.static(path.join(__dirname, '../'))); // Serve static files from the parent directory

// app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// // 当访问包含 /referral/ 的路径时，重定向到 /home.html
// app.get('/referral/*', (req, res) => {
//    res.redirect('/home.html');
//   });

// // Route for the home page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../home.html'));
// });


// // Start the server
// //app.listen(port, () => {
//   //console.log(`Server is running on http://localhost:${port}`);
// //});

// // Start the server with HTTPS
// https.createServer(sslOptions, app).listen(port, () => {
//   console.log(`Server is running on https://localhost:${port}`);
// });


const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '../')));

// Serve the 'node_modules' directory
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// 当访问包含 /referral/ 的路径时，重定向到 /home.html
app.get('/referral/*', (req, res) => {
   res.redirect('/home.html');
  });


// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


require('dotenv').config()
const express = require("express");
const app = express();


//  app.get('/js/config.js', (req, res) => {
//     const config = {
//          env: {
//              serverUrl: "https://acme-fitness.homelab.fynesy.com"
//              //serverUrl: process.env.SERVER_URL
//          }
//      }
//      res.send(`
//          config = ${JSON.stringify(config)}
//      `)
//  });

app.use(express.static("public"));

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

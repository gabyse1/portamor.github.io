const { conn } = require('./src/database.js')
const serverApp   = require('./src/app');

require('dotenv').config();

// starting API
conn.sync({ alter: false }).then(()=> {
  serverApp.listen(process.env.PORT, () => {
    console.log( "\n" + "%s listening at " + process.env.PORT + "\n" + Date() + "\n" )
  });
});



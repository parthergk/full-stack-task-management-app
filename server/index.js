const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require('./config/db');
const User = require('./models/User');

app.use(express.json());


app.post('/login', (req, res)=>{

});

app.listen(port, ()=>{
    console.log(`Server is runging on port ${port}`);  
})

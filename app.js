

const express = require("express");
const app= express();
const path= require("path");
const port= process.env.PORT || 4000;
const bodyParser = require('body-parser'); 
const axios  = require('axios');




app.use(express.json());
var cors = require('cors')

app.use(cors()) 

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/tickers', async (req, res) => {
    try {
      const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching tickers:', error.message);
      res.status(500).json({ error: error});
    }
  });
  



app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})